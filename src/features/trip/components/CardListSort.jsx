import React from "react";
import useTrip from "../hooks/use-trip";
import Card from "./Card";
import { Link } from "react-router-dom";
import Search from "../../../layouts/Search";
import useAuth from "../../../hooks/use-auth";

function CardListSort({ layout }) {
  const { trips } = useTrip();
  const { sh, handleSh } = useAuth();
  console.log(trips);

  const shFilter = trips
    .filter((el) => el.title.includes(sh))
    .map((trip) => (
      <Link to={`/trip/${trip.id}`}>
        <Card trip={trip} />
      </Link>
    ));

  return (
    <div className={layout}>
      {shFilter}
      {/* {trips.map((trip) => (
        <Link to={`/trip/${trip.id}`}>
          <Card trip={trip} />
        </Link>
      ))} */}
    </div>
  );
}

export default CardListSort;
