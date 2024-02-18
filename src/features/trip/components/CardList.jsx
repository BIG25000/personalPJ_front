import React from "react";
import useTrip from "../hooks/use-trip";
import Card from "./Card";

function CardList() {
  const { trips } = useTrip();
  return (
    <div className="grid grid-cols-3 gap-10">
      {trips.map((trip) => (
        <Card trip={trip} />
      ))}
    </div>
  );
}

export default CardList;
