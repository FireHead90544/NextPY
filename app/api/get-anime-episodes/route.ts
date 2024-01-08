import { NextRequest } from "next/server";
import { load } from "cheerio";

export async function GET(request: NextRequest){
    const id = request.nextUrl.searchParams.get("id");
    if (!id){ return Response.json({ id, anime_id: null, total: 0, prefix: null, episodes: [] }) };
    
    const baseUrl = process.env.ANITAKU_BASE_URL;
    let resp = await fetch(`${baseUrl}/category/${id}`);
    let body = await resp.text();
    let $ = load(body);

    const anime_id = parseInt($("input#movie_id").attr("value")!);
    if (!anime_id){ return Response.json({ id, anime_id: null, total: 0, prefix: null, episodes: [] }) };
    
    const last = parseInt($("#episode_page").first().find("a").eq(-1).attr("ep_end")!);
    resp = await fetch(`https://ajax.gogo-load.com/ajax/load-list-episode?ep_start=0&ep_end=${last}&id=${anime_id}`)
    body = await resp.text();
    $ = load(body);

    let prefix = $("ul#episode_related > li > a").first().attr("href")?.trim().split("-episode-")[0] || null;
    prefix = (prefix && `${prefix}-episode-`)
    const episodes = $("ul#episode_related > li > a").map((i, r) => {
        return eval($(r).attr("href")?.trim().split("-episode-")[1].replace("-", ".")!);
    }).get().sort((a, b) => a - b);

    return Response.json({ id, anime_id, total: episodes.length, prefix, episodes });
}