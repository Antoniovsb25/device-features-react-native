import { GOOGLE_MAPS_API } from "@env";

export function getMapPreview(lat: string, lng: string) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=600x300&maptype=roadmap
&markers=color:red%7Clabel:S%7C${lat},${lng}
&key=${GOOGLE_MAPS_API}`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API}`
  );
  if (!response.ok) throw new Error("Failed to fetch addresss");
  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}
