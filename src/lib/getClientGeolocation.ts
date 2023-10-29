import { GeoLocationData } from "@/models/GeoLocation";
import { getGeolocation } from "@/lib/HTTP";

export default async function getClientGeolocation() {
  try {
    const res = await getGeolocation();

    const clientGeolocation: GeoLocationData = await res.json();

    return clientGeolocation;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
}
