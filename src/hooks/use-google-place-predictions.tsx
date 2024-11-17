import { useState } from "react";
import { toast } from "sonner";

import { getGooglePlaceDetails } from "@/actions/google-place/place-details-action";
import {
  type PlacePredictionConfig,
  type Prediction,
  getGooglePlacePredictions,
} from "@/actions/google-place/place-predictions-action";

import { parseErrorMessage } from "../lib/utils";

export const useGooglePlacePredictions = (config: PlacePredictionConfig) => {
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState<Prediction[]>([]);

  const reset = () => {
    setPlaces([]);
    setLoading(false);
  };

  const initPlaces = async (placeId: string) => {
    const havePlace = places.find((p) => p.place_id === placeId);
    if (havePlace) return;

    setLoading(true);
    try {
      const data = await getGooglePlaceDetails(placeId);
      if (data?.place_id) {
        setPlaces([parsePlaceInfoToPrediction(data)]);
      }
      setLoading(false);
      return data;
    } catch (e) {
      toast.error("Google Place API", {
        description: parseErrorMessage(e),
      });
    }
    setLoading(false);
  };

  const findPlaces = async (keyword: string) => {
    setLoading(true);
    try {
      const data = await getGooglePlacePredictions(keyword, config);
      setPlaces(data);
    } catch (e) {
      toast.error("Google Place API", {
        description: parseErrorMessage(e),
      });
    }
    setLoading(false);
  };

  return { loading, findPlaces, places, reset, initPlaces };
};

const parsePlaceInfoToPrediction = (place: google.maps.places.PlaceResult): Prediction => {
  const address = place.address_components
    ?.map((c) => {
      if (c.types.includes("postal_code")) return "";
      return c.long_name;
    })
    .join(", ");

  return {
    description: `${place.name}, ${address}`,
    place_id: place.place_id || "",
    matched_substrings: [],
    terms: [],
    types: [],
    structured_formatting: {
      main_text: place.name || place.formatted_address || "",
      secondary_text: place.formatted_address || "",
      main_text_matched_substrings: [],
    },
  };
};
