import React from "react";

import useTrip from "../../trip/hooks/use-trip";
import { useParams } from "react-router-dom";

function MiddleBar() {
  const { trips } = useTrip();

  const findTripById = trips.find((el) => el.id == useParams().tripId);
  const startDateCon = new Date(findTripById?.startDate).toLocaleDateString(
    "th-TH",
    { day: "numeric", month: "long", year: "numeric" }
  );
  const endDateCon = new Date(findTripById?.endDate).toLocaleDateString(
    "th-TH",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" cl>
      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </svg>
  );

  return (
    <>
      <div className="bg-greenTwo flex flex-col px-32 text-egg gap-4 justify-center h-[10rem]">
        <div className="flex gap-10 items-center">
          <h1 className="text-3xl">{findTripById?.title}</h1>
          <h1 className="flex items-center gap-2">
            <div className="h-[15px] w-[15px]">{icon()}</div>
            <div>{findTripById?.location}</div>
          </h1>
        </div>
        <div className="flex justify-around">
          <div className="flex items-center">Profile</div>
          <div>
            <div className="text-center">วันที่เริ่มทริป</div>
            <div>{startDateCon}</div>
          </div>
          <div>
            <div className="text-center">วันที่เริ่มทริป</div>
            <div>{endDateCon}</div>
          </div>
          <div>
            <div>รับผู้เข้าร่วม</div>
            <div className="text-center">{findTripById?.numPeople} คน</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddleBar;
