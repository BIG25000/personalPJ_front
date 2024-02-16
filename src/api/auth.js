import axios from "../config/axios";

export const register = (user) => axios.post("/auth/register", user);
export const fetchMe = () => axios.get("/auth/me");
export const login = (credential) => axios.post("/auth/login", credential);
export const guestIn = () => axios.post("/guest");
