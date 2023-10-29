import env from "./env";

const url = env.IPIFY_API_URL;
const apiKey = env.IPIFY_API_KEY;

const getGeolocation = async (query?: string) => {
  const URI = `${url}/country,city?apiKey=${apiKey}${query ? `&${query}` : ""}`;

  const res = await fetch(URI, { cache: "force-cache" });

  return res;
};

export { getGeolocation };
