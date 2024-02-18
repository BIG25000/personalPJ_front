import React from "react";
import Hero from "../features/trip/components/Hero";
import Card from "../features/trip/components/Card";
import CreateTripContainer from "../features/trip/components/CreateTripContainer";
import TripContextProvider, {
  TripContext,
} from "../features/trip/contexts/TripContext";
import CardList from "../features/trip/components/CardList";

function TripPage() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <TripContextProvider>
        <div className="mb-5">
          <CreateTripContainer />
        </div>
        <div className="flex justify-center">
          <CardList />
        </div>
      </TripContextProvider>
    </>
  );
}

export default TripPage;
