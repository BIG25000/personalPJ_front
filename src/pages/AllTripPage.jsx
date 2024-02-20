import React from "react";
import CardList from "../features/trip/components/CardList";
import TripContextProvider from "../features/trip/contexts/TripContext";
import MiddleBar from "../features/allTrip/components/MiddleBar";
import CardListSort from "../features/trip/components/CardListSort";

function AllTripPage() {
  return (
    <>
      <h1 className="mt-10 mb-10 ml-10">UPCOMING</h1>
      <TripContextProvider>
        <div className="flex justify-center">
          <CardListSort layout="grid grid-cols-4 gap-10" />
        </div>
      </TripContextProvider>
    </>
  );
}

export default AllTripPage;
