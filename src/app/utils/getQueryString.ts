import { IpSchema } from "@/models/GeoLocation";

export function getQueryString(value: string) {
  const key = IpSchema.safeParse(value).success ? "ipAddress" : "domain";
  const queryString = `${key}=${value}`;

  return queryString;
}
