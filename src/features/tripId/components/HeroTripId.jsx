import useTrip from "../../trip/hooks/use-trip";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import RegisterForm from "../../auth/components/RegisterForm";
import Modal from "../../../components/Modal";
import JoinForm from "../../joinTrip/components/JoinForm";
import allUserById from "../../../hooks/allUse-auth";
import useAuth from "../../../hooks/use-auth";
import { useState } from "react";
import { useEffect } from "react";
import TripForm from "../../trip/components/TripForm";
import EditForm from "../../trip/components/EditForm";
import PeopleJoinForm from "../../joinTrip/components/PeopleJoinForm";

function HeroTripId() {
  const { trips, createTrip, editTrip } = useTrip();
  // const { allCreate } = allUserById();
  const { authUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const submitEditForm = async (formData, tripId) => {
    await editTrip(formData, tripId);
  };

  const findTripById = trips.find((el) => el.id == useParams().tripId);

  console.log(findTripById?.userId);
  console.log(authUser?.id);

  useEffect(() => {
    if (findTripById?.userId == authUser?.id) {
      console.log("****");
      setIsOpen(true);
    }
  }, [findTripById]);

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
          {!isOpen && (
            <>
              <Modal
                title="เข้าร่วมทริป"
                id="join"
                button="btn bg-greenOne text-xl text-egg"
              >
                <JoinForm />
              </Modal>
            </>
          )}

          {isOpen && (
            <>
              <Modal
                title="Edit Trip"
                id="editTrip"
                button="btn bg-greenOne text-egg text-xl "
              >
                <EditForm onSubmit={submitEditForm} />
              </Modal>
              <Modal
                title="ดูจำนวนผู้เข้าร่วมทริป"
                id="join"
                button="btn bg-greenOne text-xl text-egg"
              >
                <PeopleJoinForm />
              </Modal>
            </>
          )}

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

// {!isOpen && (
//   <>
//     <Modal
//       title="เข้าร่วมทริป"
//       id="join"
//       button="btn bg-greenOne text-xl text-egg"
//     >
//       <JoinForm />
//     </Modal>
//   </>
// )}

// {isOpen && (
//   <>
//     <Modal
//       title="เข้าร่วมทริป"
//       id="join"
//       button="btn bg-greenOne text-xl text-egg"
//     >
//       <JoinForm />
//     </Modal>
//     <Modal
//       title="ดูจำนวนผู้เข้าร่วมทริป"
//       id="join"
//       button="btn bg-greenOne text-xl text-egg"
//     >
//       <RegisterForm />
//     </Modal>
//   </>
// )}

//******************************************************************************** */

// <Modal
//           title="เข้าร่วมทริป"
//           id="join"
//           button="btn bg-greenOne text-xl text-egg"
//         >
//           <JoinForm />
//         </Modal>
//         <Modal
//           title="ดูจำนวนผู้เข้าร่วมทริป"
//           id="join"
//           button="btn bg-greenOne text-xl text-egg"
//         >
//           <RegisterForm />
//         </Modal>
