import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TripPage from "../pages/TripPage";
import AllTripPage from "../pages/AllTripPage";
import LoginPage from "../pages/LoginPage";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <TripPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "allTrip",
        element: <AllTripPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
