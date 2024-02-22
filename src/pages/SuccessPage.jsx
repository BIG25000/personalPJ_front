import React from "react";
import { Link } from "react-router-dom";
import TripContextProvider from "../features/trip/contexts/TripContext";
import CardListSort from "../features/trip/components/CardListSort";
import CardListSortSuccess from "../features/trip/components/CardListSortSuccess";

function SuccessPage() {
  return (
    <>
      <>
        <div className="mt-10 mb-10 mx-10 flex justify-between items-center">
          <p className="text-xl font-medium">!!! TRIP SUCCESS !!!</p>
          <div className="flex gap-5">
            <Link to="/allTrip" className="text-md underline">
              PENDING PAGE
            </Link>
            <Link to="/" className="text-md underline">
              BACK HOME
            </Link>
          </div>
        </div>
        <TripContextProvider>
          <div className="flex justify-center">
            <CardListSortSuccess layout="grid grid-cols-4 gap-10" />
          </div>
        </TripContextProvider>
      </>
    </>
  );
}

export default SuccessPage;
