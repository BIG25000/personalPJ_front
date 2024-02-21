import axios from "../config/axios";

export const register = (user) => axios.post("/auth/register", user);
export const fetchMe = () => axios.get("/auth/me");
export const fetchAll = () => axios.get("/trips/history");
export const fetchAllCreate = () => axios.get("/trips/historyCreate");

export const login = (credential) => axios.post("/auth/login", credential);
export const guestIn = () => axios.post("/guest");
export const deleteCreateTrip = (id) =>
  axios.delete(`/trips/historyCreate/${id}`);
export const deleteJoinTrip = (id) => axios.delete(`/trips/historyJoin/${id}`);
