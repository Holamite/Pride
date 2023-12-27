import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Swap from "./Pages/SwapPage.jsx";
import Launchpad from "./Pages/Launchpad.jsx";
import TokenPage from "./Pages/TokenPage.jsx";
import CreateLaunchpad from "./components/LaunchpadPages/Create Launchpad/CreateLaunchpad.jsx";
import ExploreLaunchpad from "./components/LaunchpadPages/ExploreLaunchpad.jsx";
import MyLaunchpad from "./components/LaunchpadPages/MyLaunchpad.jsx";
import SecondLaunchpadForm from "./components/LaunchpadPages/Create Launchpad/SecondLaunchpadForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Swap",
    element: <Swap />,
  },
  {
    path: "/launchpad",
    element: <Launchpad />,
  },
  {
    path: "/token",
    element: <TokenPage />,
  },
  {
    path: "/createLaunchpad",
    element: <CreateLaunchpad />,
  },
  {
    path: "/exploreLaunchpads",
    element: <ExploreLaunchpad />,
  },
  {
    path: "/myLaunchpads",
    element: <MyLaunchpad />,
  },
  {
    path: "/secondLaunchpadForm",
    element: <SecondLaunchpadForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
