import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
    console.log('TEEST, error')
    return new Response(JSON.stringify({ success: true }), { status: 200 })
}