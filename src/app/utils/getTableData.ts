import { GeoLocationData } from "@/models/GeoLocation";

export function getTableData({
  ip,
  location: { region, city, postalCode, timezone },
  isp,
}: GeoLocationData) {
  const tableData = [
    { name: "ip address", val: ip },
    {
      name: "location",
      val:
        region &&
        `${city ? `${city}, ` : ""}<span>${region} ${postalCode}</span>`,
    },
    { name: "timezone", val: timezone && `UTC ${timezone}` },
    { name: "isp", val: isp },
  ];

  return tableData;
}
