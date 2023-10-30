import { NextRequest, NextResponse } from "next/server";
import { getGeolocation } from "@/lib/HTTP";
import { getQueryString } from "@/app/utils/getQueryString";
import type { GeoLocationData } from "@/models/GeoLocation";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get("search")?.toLowerCase();

  if (!searchTerm)
    return new NextResponse(null, {
      status: 404,
    });

  const res = await getGeolocation(getQueryString(searchTerm));

  if (!res.ok) {
    if (res.status === 422 || res.status === 404 || res.status === 400)
      return new NextResponse(null, {
        status: 422,
      });
    return new NextResponse(null, {
      status: 500,
    });
  }

  const data: GeoLocationData = await res.json();

  return NextResponse.json(data);
}
