import { NextRequest } from "next/server";
import { load } from "cheerio";

// Will be finished later
export async function GET(request: NextRequest) {
    const email = request.nextUrl.searchParams.get("email");
    const password = request.nextUrl.searchParams.get("password");
    if (!email || !password) { return Response.json({ error: "email & password parameters missing!" }) };

    const baseUrl = process.env.ANITAKU_BASE_URL;
    const csrf = await (await fetch(`${baseUrl}/login.html`)).text();
    const $ = load(csrf);
    const _csrf = $("meta[name='csrf-token']").first().attr("content")!;

    const login = await fetch(`${baseUrl}/login.html`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({ email, password, _csrf }).toString(),
        credentials: "include",
    })

    // FIXME: Not finished yet. This logic doesn't work.
    // Needs a session to fetch csrf_token first.
    // Use the same session to login
    // Extract the cookies from the session itself (not request)

    const cookies = login.headers.get("set-cookie")!;
    const gogoanime = cookies.match(/gogoanime=(.*?);/)?.[1];
    const auth = cookies.match(/auth=(.*?);/)?.[1];
    if (!gogoanime || !auth) { return Response.json({ error: "invalid credentials!" }) };

    return Response.json({ gogoanime, auth });
}