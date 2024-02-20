import React from "react";
import useTrip from "../hooks/use-trip";
import Card from "./Card";
import { Link } from "react-router-dom";

function CardListSort({ layout }) {
  const { trips } = useTrip();

  return (
    <div className={layout}>
      {trips.map((trip) => (
        <Link to={`/trip/${trip.id}`}>
          <Card trip={trip} />
        </Link>
      ))}
    </div>
  );
}

export default CardListSort;
