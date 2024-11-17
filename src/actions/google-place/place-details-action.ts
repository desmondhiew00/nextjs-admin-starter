"use server";

const PLACE_DETAILS_API_URL = "https://maps.googleapis.com/maps/api/place/details/json";

export interface PlaceDetailsConfig extends Omit<google.maps.places.PlaceDetailsRequest, "placeId"> {}
export type GooglePlace = google.maps.places.PlaceResult;

interface PlaceDetailsResponse {
  result?: google.maps.places.PlaceResult;
  status?: string;
  error_message?: string;
}

export const getGooglePlaceDetails = async (placeId: string, config?: PlaceDetailsConfig) => {
  const googleApiKey = process.env.GOOGLE_API_KEY;
  if (!googleApiKey) throw new Error("GOOGLE_API_KEY is not defined");

  const params: Record<string, string> = {};
  params.place_id = placeId;
  params.key = googleApiKey;
  if (config?.language) params.language = config.language;
  if (config?.region) params.region = config.region;
  if (config?.sessionToken) params.sessionToken = config.sessionToken as string;
  params.fields = "address_components,adr_address,formatted_address,geometry,name,place_id,url,vicinity,website";
  if (config?.fields) params.fields = config.fields.join(",");

  const response = await fetch(`${PLACE_DETAILS_API_URL}?${new URLSearchParams(params)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    next: { tags: ["google-place"] },
  });

  if (response.status !== 200) throw new Error("Failed to fetch");
  const data = (await response.json()) as PlaceDetailsResponse;
  if (data.error_message) throw new Error(data.error_message);
  return data.result;
};
