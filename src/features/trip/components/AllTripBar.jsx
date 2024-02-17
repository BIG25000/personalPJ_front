import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";

function AllTripBar() {
  return (
    <>
      <div className="flex justify-between mt-5 mx-10 items-center">
        <div className="flex gap-5">
          <div className="text-greenTwo font-medium">!!!UPCOMING TRIPS!!!</div>
          <Link to="/allTrip" className="underline font-medium">
            VIEW ALL TRIP
          </Link>
        </div>
        <button className="btn text-egg bg-greenOne">create trip</button>
      </div>
    </>
  );
}

export default AllTripBar;
