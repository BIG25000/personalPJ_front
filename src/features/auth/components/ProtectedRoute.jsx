import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";

export default function ProtectedRoute({ children }) {
  const { authUser } = useAuth();
  return authUser ? children : <Navigate to="/login" />;
}
