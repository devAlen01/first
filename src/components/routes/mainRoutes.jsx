import React from "react";
import Admin from "../Admin";
import Students from "../Students";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Modals from "../Modals";

let ROUTES = [
  {
    link: "/",
    element: <Home />,
    id: 1,
  },

  {
    link: "/students",
    element: <Students />,
    id: 2,
  },
  {
    link: "/admin",
    element: <Admin />,
    id: 3,
  },

  {
    link: "/modal",
    element: <Modals />,
    id: 3,
  },
];

const MainRoutes = () => {
  return ROUTES.map((el) => (
    <Routes>
      <Route path={el.link} element={el.element} key={el.id} />
    </Routes>
  ));
};

export default MainRoutes;
