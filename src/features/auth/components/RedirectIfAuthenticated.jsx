import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";

function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  return authUser ? <Navigate to="/" /> : children;
}

export default RedirectIfAuthenticated;
