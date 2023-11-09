import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  // using useSearchParams we have access to query string after params
  // also we can update query string using setSearchParams
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
}
