import React from "react";
import Hero from "../features/trip/components/Hero";
import Card from "../features/trip/components/Card";

function TripPage() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5 mx-5 ">
        <Card />
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
