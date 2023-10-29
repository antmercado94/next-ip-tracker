import { dummyData } from "@/data/dummy";
import getClientGeolocation from "@/lib/getClientGeolocation";
import GeolocationProvider from "@/app/context/GeolocationContext";
import Interface from "@/app/components/Interface";

export const dynamic = "force-dynamic";

export default async function Home() {
  const clientGeolocation = (await getClientGeolocation()) ?? dummyData;

  return (
    <GeolocationProvider clientData={clientGeolocation}>
      <Interface />
    </GeolocationProvider>
  );
}
