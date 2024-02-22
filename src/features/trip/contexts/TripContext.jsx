import { createContext } from "react";
import * as tripApi from "../../../api/trip";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const TripContext = createContext();

export default function TripContextProvider({ children }) {
  const [trips, setTrips] = useState([]);
  const [trips2, setTrips2] = useState([]);

  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    tripApi
      .getAllTrip()
      .then((res) => setTrips(res.data.sumTrip))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    tripApi
      .getAllTrip2()
      .then((res) => setTrips2(res.data.sumTrip))
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
      value={{ createTrip, trips, createJoinTrip, editTrip, trips2 }}
    >
      {children}
    </TripContext.Provider>
  );
}
