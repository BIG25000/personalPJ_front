import React from "react";
import useTrip from "../../trip/hooks/use-trip";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function HeroTripId() {
  const { trips } = useTrip();

  const findTripById = trips.find((el) => el.id == useParams().tripId);
  return (
    <>
      <div className="px-32 pt-12 flex flex-col gap-10 pb-10">
        <div>
          <img
            src={findTripById?.image}
            alt=""
            className="h-[30rem] w-[50rem]"
          />
        </div>
        <div>
          <p>{findTripById?.description}</p>
        </div>
        <div className="flex gap-10 items-center">
          <button className="btn bg-greenOne text-xl text-egg">
            เข้าร่วมทริป
          </button>
          <button className="btn bg-greenOne text-xl text-egg">
            ดูจำนวนผู้เข้าร่วมทริป
          </button>
          <Link to="/" className="text-md underline">
            BACK HOME
          </Link>
          <Link to="/allTrip" className="text-md underline">
            ALL TRIP
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroTripId;
