import axios from "../config/axios";

export const createTrip = (formData) => axios.post("/trips", formData);
// export const getAllPostIncludeFriendPost = () => axios.get("/trips/allTrip");

export const getAllTrip = () => axios.get("/trips/allTrip");

export const createJoinTrip = (userJoin) =>
  axios.post("/trips/joins", userJoin);
