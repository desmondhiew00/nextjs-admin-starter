import { debounce, find } from "lodash";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { getGooglePlaceDetails } from "@/actions/google-place/place-details-action";
import { useGooglePlacePredictions } from "@/hooks/use-google-place-predictions";
import { parseErrorMessage } from "@/lib/utils";

import { Button } from "../ui/button";
import { Combobox } from "../ui/combo-box";

export type GooglePlaceValue = google.maps.places.PlaceResult & { lat?: number; lng?: number; description: string };
interface GoogleAutoCompleteInputProps {
  placeholder?: string;
  value?: string | null;
  disabled?: boolean;
  onChange?: (placeId: string, value: GooglePlaceValue) => void;
  onSelect?: (placeId: string, value: GooglePlaceValue) => void;
  showUpdateBtn?: boolean | string;
  onUpdateAddress?: (place: GooglePlaceValue) => void;
}

export const GoogleAutoCompleteSelectInput: React.FC<GoogleAutoCompleteInputProps> = (props) => {
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const [placeId, setPlaceId] = useState(props.value || "");
  const [place, setPlace] = useState<GooglePlaceValue | null>(null);

  const { places, findPlaces, initPlaces, loading } = useGooglePlacePredictions({
    components: "country:my",
    language: "en",
  });

  useEffect(() => {
    if (props.value !== placeId) setPlaceId(props.value || "");
  }, [props.value]);

  useEffect(() => {
    if (placeId) {
      if (!place || place.place_id !== placeId) {
        initPlaces(placeId).then((details) => {
          if (details) {
            const lat = details.geometry?.location?.lat as unknown as number;
            const lng = details.geometry?.location?.lng as unknown as number;
            const data: GooglePlaceValue = { ...details, lat, lng, description: place?.description || "" };
            setPlace(data);
          }
        });
      }
    }
  }, [placeId]);

  const onSelect = async (placeId: string) => {
    setFetchingDetails(true);
    try {
      const place = find(places, { place_id: placeId });
      setPlaceId(placeId);

      const details = await getGooglePlaceDetails(placeId);
      if (details) {
        const lat = details.geometry?.location?.lat as unknown as number;
        const lng = details.geometry?.location?.lng as unknown as number;
        const data: GooglePlaceValue = { ...details, lat, lng, description: place?.description || "" };
        setPlace(data);
        props.onSelect?.(placeId, data);
      }
      setFetchingDetails(false);
    } catch (e) {
      toast.error(parseErrorMessage(e));
      setFetchingDetails(false);
    }
  };

  const onKeywordChange = (keyword: string) => {
    findPlaces(keyword);
  };
  const debounceKeywordChange = debounce(onKeywordChange, 500);

  const options = places.map((place) => ({ label: place.description, value: place.place_id }));
  return (
    <div className="flex items-center gap-2">
      <Combobox
        width={500}
        disabled={props.disabled}
        loading={fetchingDetails || loading}
        options={options}
        value={placeId}
        onOpenChanged={(open) => {
          if (!open && placeId) initPlaces(placeId);
        }}
        placeholder={props.placeholder || "Select Place"}
        searchText="Search Place..."
        onReachBottom={() => {}}
        shouldFilter={false}
        onKeywordChange={debounceKeywordChange}
        onSelect={onSelect}
      />
      {props.showUpdateBtn && (
        <Button
          variant="secondary"
          size="sm"
          disabled={props.disabled || !place}
          onClick={(e) => {
            e.preventDefault();
            props.onUpdateAddress?.(place as GooglePlaceValue);
          }}
        >
          {typeof props.showUpdateBtn === "string" ? props.showUpdateBtn : "Set"}
        </Button>
      )}
    </div>
  );
};

export const getPlaceState = (place: google.maps.places.PlaceResult) => {
  const state = place.address_components?.find((c) => c.types.includes("administrative_area_level_1"));
  const value = state?.long_name || "";
  return value;
};

export const getPostcode = (place: google.maps.places.PlaceResult) => {
  const postcode = place.address_components?.find((c) => c.types.includes("postal_code"));
  const value = postcode?.long_name || "";
  return value;
};

export const getCity = (place: google.maps.places.PlaceResult) => {
  const city = place.address_components?.find((c) => c.types.includes("locality"));
  const value = city?.long_name || "";
  return value;
};

export const getPlaceFullAddress = (place: google.maps.places.PlaceResult) => {
  return place?.formatted_address;
};

export default GoogleAutoCompleteSelectInput;
