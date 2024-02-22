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
import { useLocation } from "react-router-dom";
import * as tripApi from "../../../api/trip";

function HeroTripId() {
  const { editTrip, tripById, setTripById } = useTrip();
  // const { allCreate } = allUserById();
  const { authUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const { tripId } = useParams();

  const submitEditForm = async (formData, tripId) => {
    await editTrip(formData, tripId);
  };

  // const findTripById = trips.find((el) => el.id == seParams().tripId);

  // console.log(findTripById?.userId);
  // console.log(authUser?.id);

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

  console.log(tripById, "-----------------------------------------------");

  return (
    <>
      <div className="px-32 pt-12 flex flex-col gap-10 pb-10">
        <div>
          <img src={tripById?.image} alt="" className="h-[30rem] w-[50rem]" />
        </div>
        <div>
          <p>{tripById?.description}</p>
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
