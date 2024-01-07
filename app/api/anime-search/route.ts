import { NextRequest } from "next/server";
import { load } from "cheerio";

export async function GET(request: NextRequest) {
	const query = request.nextUrl.searchParams.get("q") || request.nextUrl.searchParams.get("query");
	const baseUrl = process.env.ANITAKU_BASE_URL;
	const resp = await fetch(`${baseUrl}/search.html?keyword=${query}`);
	const body = await resp.text();
	const $ = load(body);
	const selector = $("#wrapper_bg > section > section.content_left > div > div.last_episodes > ul > li");

	const results = selector.map((i, r) => {
        const name = $(r).find("p.name a").text().trim();
        const idurl = $(r).find("p.name a").attr("href")?.trim().split("/")!;
        const id = idurl[idurl.length - 1].replace(/\//g, "");
        const released =
            parseInt(
                (
                    $(r).find("p.released").text().trim().split("Released:")[1] || ""
                ).trim()
            ) || null;
        const cover = $(r).find("div a img").attr("src")!;
        return { name, id, released, cover };
    }).get();

	return Response.json({ query, found: results.length, results });
}
