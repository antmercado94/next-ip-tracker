"use client";

import { useContext } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import marker from "@/public/icon-location.svg";
import { GeolocationContext } from "../context/GeolocationContext";

const myIcon = new L.Icon({
  iconUrl: marker.src,
  iconSize: [40, 50],
});

export default function Map() {
  const {
    interfaceData: {
      location: { lat, lng },
    },
  } = useContext(GeolocationContext);

  const LocationMarker = () => {
    const map = useMap();
    map.setView([lat, lng]);
    return !lat || !lng ? null : <Marker icon={myIcon} position={[lat, lng]} />;
  };

  return (
    <MapContainer
      zoomControl={false}
      center={[lat, lng]}
      zoom={18}
      scrollWheelZoom={false}
      className="min-h-[inherit]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}
