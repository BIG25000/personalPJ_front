import React from "react";
import TripContextProvider from "../features/trip/contexts/TripContext";
import MiddleBar from "../features/tripId/components/MiddleBar";
import HeroTripId from "../features/tripId/components/HeroTripId";

function TripIDPage() {
  return (
    <div>
      <TripContextProvider>
        <MiddleBar />

        <HeroTripId />
      </TripContextProvider>
    </div>
  );
}

export default TripIDPage;
