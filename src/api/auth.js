import axios from "../config/axios";

export const register = (user) => axios.post("/auth/register", user);

export const login = (credential) => axios.post("/auth/login", credential);
