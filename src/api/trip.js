import axios from "../config/axios";

export const createTrip = (formData) => axios.post("/trips", formData);
// export const getAllPostIncludeFriendPost = () => axios.get("/trips/allTrip");

export const getAllTrip = () => axios.get("/trips/allTrip");

export const getAllTrip2 = () => axios.get("/trips/allTrip2");

export const createJoinTrip = (userJoin) =>
  axios.post("/trips/joins", userJoin);

export const editTrip = (data, id) => axios.patch(`/trips/${id}`, data);

export const getTripById = (id) => axios.get(`/trips/${id}`);
