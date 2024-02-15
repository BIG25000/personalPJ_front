import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";

function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  return authUser ? <Navigate to="/trip" /> : children;
}

export default RedirectIfAuthenticated;
