import React from "react";
import CardList from "../features/trip/components/CardList";
import TripContextProvider from "../features/trip/contexts/TripContext";
import CardListSort from "../features/trip/components/CardListSort";
import { Link } from "react-router-dom";

function AllTripPage() {
  return (
    <>
      <div className="mt-10 mb-10 mx-10 flex justify-between items-center">
        <p className="text-xl font-medium">!!! UPCOMING !!!</p>
        <div className="flex gap-5">
          <Link to="/success" className="text-md underline">
            SUCCESS PAGE
          </Link>
          <Link to="/" className="text-md underline">
            BACK HOME
          </Link>
        </div>
      </div>
      <TripContextProvider>
        <div className="flex justify-center">
          <CardListSort layout="grid grid-cols-4 gap-10" />
        </div>
      </TripContextProvider>
    </>
  );
}

export default AllTripPage;
