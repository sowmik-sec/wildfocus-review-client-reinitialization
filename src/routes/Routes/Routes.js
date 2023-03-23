import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home/Home";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services";

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
]);
