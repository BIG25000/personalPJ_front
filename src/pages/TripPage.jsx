import React from "react";
import Hero from "../features/trip/components/Hero";
import Card from "../features/trip/components/Card";
import { Link } from "react-router-dom";

function TripPage() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="flex justify-between mt-5 mx-10">
        <div className="flex gap-5">
          <div>ทริปที่กำลังจะเกิดขึ้นเร็ว ๆ นี้</div>
          <Link to="/allTip">ALL TRIP</Link>
        </div>
        <div>Create TRIP</div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5 mx-5 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default TripPage;
