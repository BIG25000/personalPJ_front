import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TripPage from "../pages/TripPage";
import AllTripPage from "../pages/AllTripPage";
import LoginPage from "../pages/LoginPage";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import HeaderGuest from "../layouts/HeaderGuest";
import TripIDPage from "../pages/TripIDPage";
import HistoryPage from "../pages/HistoryPage";
import HistoryContextProvider from "../features/historys/components/contexts/HistoryContext";

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
        {/* <HistoryContextProvider> */}
        <ProtectedRoute>
          <Header />
          <Outlet />
        </ProtectedRoute>
        {/* </HistoryContextProvider> */}
      </>
    ),
    children: [
      {
        path: "",
        element: (
          // <ProtectedRoute>
          <TripPage />
          // </ProtectedRoute>
        ),
      },
      {
        path: "allTrip",
        element: (
          // <ProtectedRoute>
          <AllTripPage />
          // </ProtectedRoute>
        ),
      },
      {
        path: "trip/:tripId",
        element: (
          // <ProtectedRoute>
          <TripIDPage />
          // </ProtectedRoute>
        ),
      },
      {
        path: "history",
        element: (
          // <ProtectedRoute>
          <HistoryPage />
          // </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/guest",
    element: (
      <>
        <HeaderGuest />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "",
        element: <TripPage />,
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
