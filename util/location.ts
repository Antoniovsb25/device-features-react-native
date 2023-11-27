import { GOOGLE_MAPS_API } from "@env";

export function getMapPreview(lat: string, lng: string) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=600x300&maptype=roadmap
&markers=color:red%7Clabel:S%7C${lat},${lng}
&key=${GOOGLE_MAPS_API}`;
  return imagePreviewUrl;
}
