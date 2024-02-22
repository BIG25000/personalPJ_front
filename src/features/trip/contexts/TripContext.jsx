import { createContext } from "react";
import * as tripApi from "../../../api/trip";
import { useState } from "react";
import { useEffect } from "react";

export const TripContext = createContext();

export default function TripContextProvider({ children }) {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    tripApi
      .getAllTrip()
      .then((res) => setTrips(res.data.sumTrip))
      .catch((err) => console.log(err));
  }, []);

  const createTrip = async (formData) => {
    await tripApi.createTrip(formData);
  };

  const createJoinTrip = async (userJoin) => {
    await tripApi.createJoinTrip(userJoin);
  };

  const editTrip = async (data, id) => {
    await tripApi.editTrip(data, id);
  };

  return (
    <TripContext.Provider
      value={{ createTrip, trips, createJoinTrip, editTrip }}
    >
      {children}
    </TripContext.Provider>
  );
}
