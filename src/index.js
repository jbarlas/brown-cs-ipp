import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Events from "./views/events/Events";
import Home from "./views/home/Home";
import Partners from "./views/partners/Partners";
import Application from "./views/application/Application";
import {
  getCurrentPartners,
  getDownload,
  getPartnerData,
  getPartnerImage,
  partnerLoader,
} from "./firebase/utils";

const partnersLoader = async () => {
  return Object.values(await getCurrentPartners()).map((elt) => {
    return {
      ...elt,
      storageData: getPartnerData(elt.applicationId),
    };
  });
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "events",
          element: <Events />,
        },
        {
          path: "partners",
          element: <Partners />,
          loader: partnersLoader,
        },
        {
          path: "apply",
          element: <Application />,
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
