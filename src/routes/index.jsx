import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TripPage from "../pages/TripPage";
import AllTripPage from "../pages/AllTripPage";
import LoginPage from "../pages/LoginPage";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },

  { path: "/trip", element: <TripPage /> },
  { path: "/allTrip", element: <AllTripPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
