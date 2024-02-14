import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage";
import TripPage from "../pages/TripPage";
import AllTripPage from "../pages/AllTripPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/trip", element: <TripPage /> },
  { path: "/allTrip", element: <AllTripPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
