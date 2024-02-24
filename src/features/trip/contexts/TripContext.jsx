import { createContext } from "react";
import * as tripApi from "../../../api/trip";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const TripContext = createContext();

export default function TripContextProvider({ children }) {
  const [trips, setTrips] = useState([]);
  const [trips2, setTrips2] = useState([]);
  const [tripById, setTripById] = useState({});
  const [showJoin, setShowJoin] = useState([]);

  // const { pathname } = useLocation();
  // console.log(pathname.split("/")[2]);

  useEffect(() => {
    tripApi
      .getAllTrip()
      .then((res) => setTrips(res.data.sumTrip))
      .catch((err) => console.log(err));

    tripApi
      .getAllTrip2()
      .then((res) => setTrips2(res.data.sumTrip))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {

  // }, []);

  const createTrip = async (formData) => {
    await tripApi.createTrip(formData);
    // setState ทุกอัน
  };

  const createJoinTrip = async (userJoin) => {
    await tripApi.createJoinTrip(userJoin);
  };

  const editTrip = async (data, id) => {
    await tripApi.editTrip(data, id);

    const res = await tripApi.getAllTrip();

    console.log(res, "resssssssssssssssss");

    const result = res.data.sumTrip.filter((el) => el.id == id);
    console.log(result, "******************RS******************");
    setTripById(result[0]);
    // setTrips(res.data.sumTrip);
    // console.log(res, "---------------------------");
    // const res2 = await tripApi.getAllTrip2();
    // setTrips2(res2.data.sumTrip);
  };

  // console.log(trips, "****************************************");
  // console.log(trips2, "*****************222222***********************");

  const getJoinAll = async (tripId) => {
    const result = await tripApi.getJoinByTripId(tripId);
    setShowJoin(result.data.data);
  };

  const acceptJoin = async (id) => {
    await tripApi.acceptJoin(id);
    toast.success("accept join trip success");
  };
  const rejectJoin = async (id) => {
    await tripApi.rejectJoin(id);
    toast.success("reject join trip success");
  };

  console.log(showJoin);

  return (
    <TripContext.Provider
      value={{
        createTrip,
        trips,
        createJoinTrip,
        editTrip,
        trips2,
        tripById,
        setTripById,
        getJoinAll,
        showJoin,
        acceptJoin,
        rejectJoin,
      }}
    >
      {children}
    </TripContext.Provider>
  );
}
