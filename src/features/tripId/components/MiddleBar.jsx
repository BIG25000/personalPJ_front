import React from "react";
import * as tripApi from "../../../api/trip";
import useTrip from "../../trip/hooks/use-trip";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../hooks/use-auth";

function MiddleBar() {
  const { tripById, setTripById } = useTrip();
  const { authUser } = useAuth();
  // const { trips } = useTrip();
  const { tripId } = useParams();

  console.log(authUser);

  // const findTripById = trips.find((el) => el.id == useParams().tripId);
  const startDateCon = new Date(tripById?.startDate).toLocaleDateString(
    "th-TH",
    { day: "numeric", month: "long", year: "numeric" }
  );
  const endDateCon = new Date(tripById?.endDate).toLocaleDateString("th-TH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    tripApi
      .getTripById(tripId)
      .then((res) => {
        setTripById(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    if (tripById?.userId == authUser?.id) {
      console.log("****");
      setIsOpen(true);
    }
  }, [tripId]);

  const icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" cl>
      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </svg>
  );

  console.log(tripById);

  return (
    <>
      <div
        className="min-h-[10rem]"
        style={{
          backgroundImage: `url(https://r4.wallpaperflare.com/wallpaper/958/157/272/sun-rays-landscape-steps-torii-wallpaper-6920283d411a7dfb2667f8dfc061460d.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <div className="bg-greenTwo flex flex-col px-32 text-egg gap-4 justify-center h-[10rem] bg-opacity-70">
          <div className="flex gap-10 items-center">
            <h1 className="text-3xl">{tripById?.title}</h1>
            <h1 className="flex items-center gap-2">
              <div className="h-[15px] w-[15px]">{icon()}</div>
              <div className="text-xl">{tripById?.location}</div>
            </h1>
          </div>
          <div className="flex justify-around">
            <div className="flex items-center font-medium text-2xl">
              create by : {authUser.firstName} {authUser.lastName}
            </div>
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
              <div className="text-center">{tripById?.numPeople} คน</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddleBar;
