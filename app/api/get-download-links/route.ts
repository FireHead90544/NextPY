import { NextRequest } from "next/server";
import { load } from "cheerio";

export async function GET(request: NextRequest){
    const id = request.nextUrl.searchParams.get("id");
    // Will finish this endpoint later
    return Response.json({endpoint: "working"});
}