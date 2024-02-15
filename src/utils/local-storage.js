const ACCESS_TOKEN = "accessToken";

export const storeToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
export const getToken = () => localStorage.getItem(ACCESS_TOKEN);
export const clearToken = () => localStorage.removeItem(ACCESS_TOKEN);
