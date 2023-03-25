import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services";
import Login from "../../register/Login/Login";
import SignUpPage from "../../register/Register/SignUpPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/services",
    element: <Services />,
    loader: () => fetch("http://localhost:5000/services"),
  },
  {
    path: "/services/:id",
    element: <ServiceDetails />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/services/${params.id}`),
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
    path: "*",
    element: <NotFound />,
  },
]);
