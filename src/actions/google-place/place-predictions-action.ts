"use server";

const PLACE_AUTOCOMPLETE_API_URL = "https://maps.googleapis.com/maps/api/place/autocomplete/json";

export type Prediction = google.maps.places.AutocompletePrediction;
export interface PlacePredictionConfig
  extends Omit<google.maps.places.AutocompletionRequest, "input" | "componentRestrictions" | "types"> {
  key?: string;
  components?: string; // country:my|country:us (country:<ISO 3166-1 Alpha-2>)
  types?: string;
}

interface AutocompleteResponse extends google.maps.places.AutocompleteResponse {
  error_message?: string;
  status?: string;
}

export const getGooglePlacePredictions = async (keyword: string, config?: PlacePredictionConfig) => {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) throw new Error("GOOGLE_API_KEY is not defined");

  const { types = "establishment|geocode" } = config || {};

  const params: PlacePredictionConfig & { input: string } = { ...config, types, input: keyword, key: apiKey };
  // @ts-ignore
  const response = await fetch(`${PLACE_AUTOCOMPLETE_API_URL}?${new URLSearchParams(params)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    next: { tags: ["google-place"] },
  });

  if (response.status !== 200) throw new Error("Failed to fetch");
  const data = (await response.json()) as AutocompleteResponse;
  if (data.error_message) throw new Error(data.error_message);
  return data.predictions;
};
