import React from "react";
import Hero from "../features/trip/components/Hero";
import Card from "../features/trip/components/Card";
import CreateTripContainer from "../features/trip/components/CreateTripContainer";

function TripPage() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className=" mb-5">
        <CreateTripContainer />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default TripPage;
