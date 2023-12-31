import { headers } from "next/headers";
import { GeoLocationData } from "@/models/GeoLocation";
import { getGeolocation } from "@/lib/HTTP";
import { getQueryString } from "@/app/utils/getQueryString";

export default async function getClientGeolocation() {
  try {
    const headersList = headers();
    const ip = headersList.get("x-forwarded-for") ?? "";

    const res = await getGeolocation(getQueryString(ip));

    const clientGeolocation: GeoLocationData = await res.json();

    return clientGeolocation;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
}
