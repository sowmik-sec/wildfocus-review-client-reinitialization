import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AddService from "../../pages/AddService/AddService";
import Home from "../../pages/Home/Home/Home";
import MyReviews from "../../pages/MyReviews/MyReviews";
import NotFound from "../../pages/NotFound/NotFound";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services";
import UpdateReview from "../../pages/UpdateReview/UpdateReview";
import Login from "../../register/Login/Login";
import SignUpPage from "../../register/Register/SignUpPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/services",
    element: <Services />,
    loader: () => fetch("https://wildfocus-review-server.vercel.app/services"),
  },
  {
    path: "/services/:id",
    element: <ServiceDetails />,
    loader: ({ params }) =>
      fetch(`https://wildfocus-review-server.vercel.app/services/${params.id}`),
  },
  {
    path: "/register",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/my-reviews",
    element: (
      <PrivateRoute>
        <MyReviews />
      </PrivateRoute>
    ),
  },
  {
    path: "/add-service",
    element: (
      <PrivateRoute>
        <AddService />
      </PrivateRoute>
    ),
  },
  {
    path: `/update-review/:id`,
    element: (
      <PrivateRoute>
        <UpdateReview />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://wildfocus-review-server.vercel.app/review-single/${params.id}`
      ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
