import React from "react";
import useTrip from "../../trip/hooks/use-trip";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import RegisterForm from "../../auth/components/RegisterForm";
import Modal from "../../../components/Modal";
import JoinForm from "../../joinTrip/components/JoinForm";
import allUserById from "../../../hooks/allUse-auth";
import useAuth from "../../../hooks/use-auth";
import { useState } from "react";

function HeroTripId() {
  const { trips } = useTrip();
  // const { allCreate } = allUserById();
  // const { authUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const findTripById = trips.find((el) => el.id == useParams().tripId);

  // if (findTripById?.userId == authUser?.id) {
  //   console.log("5555");
  // }

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
          <Modal
            title="เข้าร่วมทริป"
            id="join"
            button="btn bg-greenOne text-xl text-egg"
          >
            <JoinForm />
          </Modal>
          <Modal
            title="ดูจำนวนผู้เข้าร่วมทริป"
            id="join"
            button="btn bg-greenOne text-xl text-egg"
          >
            <RegisterForm />
          </Modal>
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
