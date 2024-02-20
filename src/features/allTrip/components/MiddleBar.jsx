import React from "react";
import useTrip from "../../trip/hooks/use-trip";
import { useParams } from "react-router-dom";

function MiddleBar() {
  const { trips } = useTrip();

  const findTripById = trips.find((el) => el.id == useParams().tripId);
  console.log(findTripById);

  return <div className="bg-greenTwo h-[10rem]">{findTripById?.title}</div>;
}

export default MiddleBar;
