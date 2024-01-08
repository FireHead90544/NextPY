import { NextRequest } from "next/server";
import { load } from "cheerio";

export async function GET(request: NextRequest){
    return Response.json({endpoint: "working"});
}