import { GeoLocationData } from "@/models/GeoLocation";
import { NetworkError, UserInputError } from "@/lib/exceptions";

// client-side fetch
export default async function fetcher(query: string) {
  try {
    const res = await fetch(query, { cache: "force-cache" });

    if (!res.ok) {
      if (res.status === 422) throw new UserInputError();
      throw new NetworkError();
    }

    return res.json() as Promise<GeoLocationData>;
  } catch (error) {
    if (error instanceof UserInputError || error instanceof NetworkError)
      throw error;
  }
}
