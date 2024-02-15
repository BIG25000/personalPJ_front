import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TripPage from "../pages/TripPage";
import AllTripPage from "../pages/AllTripPage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/trip", element: <TripPage /> },
  { path: "/allTrip", element: <AllTripPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
