import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const placeId = searchParams.get("placeId");
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAP_EMBED_API_KEY}&q=place_id:${placeId}`;
  redirect(embedUrl);
}
