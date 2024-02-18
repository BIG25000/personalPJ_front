import { useContext } from "react";
import { TripContext } from "../contexts/TripContext";

function useTrip() {
  return useContext(TripContext);
}

export default useTrip;
