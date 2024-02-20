import React from "react";
import TripContextProvider from "../features/trip/contexts/TripContext";
import MiddleBar from "../features/tripId/components/MiddleBar";

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
