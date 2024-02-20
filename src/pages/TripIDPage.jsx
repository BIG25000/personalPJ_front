import React from "react";
import MiddleBar from "../features/allTrip/components/MiddleBar";
import TripContextProvider from "../features/trip/contexts/TripContext";

function TripIDPage() {
  return (
    <div>
      <TripContextProvider>
        <MiddleBar />
        TripIDPage
      </TripContextProvider>
    </div>
  );
}

export default TripIDPage;
