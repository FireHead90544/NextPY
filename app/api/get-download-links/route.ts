import { NextRequest } from "next/server";
import { load } from "cheerio";

interface EpisodesResponse{
    id: number | null,
    anime_id: string | null,
    total: number,
    prefix: string | null,
    episodes: number[]
}

const BASE = process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : "http://localhost:3000";

export async function GET(request: NextRequest){
    const id = request.nextUrl.searchParams.get("id");
    let _ep = request.nextUrl.searchParams.get("ep");
    const ep: number | null = _ep !== null ? parseFloat(_ep) : null;
    if (!id || !ep){ return Response.json({ id, ep, qualities: {} }) };
    
    const resp = await fetch(`${BASE}/api/get-anime-episodes?id=${id}`);
    const eps: EpisodesResponse = await resp.json();
    const episode_page: string | null = (eps.prefix && ep in eps.episodes) ? `${eps.prefix}${ep}` : null;
    if (!episode_page){ return Response.json({ id, ep, qualities: {} }) };

    const baseUrl = process.env.ANITAKU_BASE_URL;
    const cookies = { auth: process.env.ANITAKU_AUTH, gogoanime: process.env.ANITAKU_GOGOANIME };

    const linkresp = await fetch(`${baseUrl}/${episode_page}`, { headers: { cookie: Object.entries(cookies).map(([k, v]) => `${k}=${v}`).join("; ") } });
    const data = await linkresp.text();
    const $ = load(data);
    const qualities: { [key: string]: Promise<string | null> | string | null} = {}
    let linkscontainer = $("#wrapper_bg > section > section.content_left > div > div.anime_video_body > div.list_dowload > div > a")
    
    linkscontainer.map((i, r) => {
        const link = $(r).attr("href")?.trim();
        const qualityName = `${$(r).text().trim().split('x')[1]}p`;
        const redirectedUrl = Promise.resolve(fetch(link!, { redirect: "manual" }))
            .then((r) => r.headers.get("location"))
            .catch(() => null);
        qualities[qualityName] = redirectedUrl;
    }).get();

    Object.keys(qualities).forEach(async (key) => {
        if (qualities[key] instanceof Promise) {
        const result: any = await qualities[key];
        qualities[key] = result instanceof Promise ? result : result;
        }
    });
    await Promise.allSettled(Object.values(qualities));

    return Response.json({id, ep, qualities});
}