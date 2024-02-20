import React from "react";
import useTrip from "../hooks/use-trip";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useState } from "react";

function CardList({ layout }) {
  const { trips } = useTrip();

  const test = trips.sort((a, b) => {
    if (a.startDate < b.startDate) {
      return -1;
    }
    if (a.startDate > b.startDate) {
      return 1;
    }
    return 0;
  });
  console.log("********************", test);

  return (
    <div className={layout}>
      {test.slice(0, 6).map((trip) => (
        <Link to={`/trip/${trip.id}`}>
          <Card trip={trip} />
        </Link>
      ))}
    </div>
  );
}

export default CardList;
