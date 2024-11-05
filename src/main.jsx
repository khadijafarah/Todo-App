import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SignUp from "./Components/pages/SignUp";
import SignIn from "./Components/pages/SignIn";
import MainLayout from "./Components/Layout/MainLayout";
import ForgetPassword from "./Components/pages/ForgetPassword";
import ResetPassWord from "./Components/pages/ResetPassWord";
import Verification from "./Components/pages/Verification";
import Home from "./Components/pages/ToDo/Home";
import Completed from "./Components/pages/Completed";
import Pending from "./Components/pages/Pending";
import Overdue from "./Components/pages/Overdue";
import { Toaster } from "react-hot-toast";
import TodoContext from "./Components/pages/TodoContext";

// import "./styles/components/main.scss"
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "/sign-up",
    element: <SignUp></SignUp>,
  },
  {
    path: "/sign-in",
    element: <SignIn></SignIn>,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword></ForgetPassword>,
  },
  {
    path: "/reset-password",
    element: <ResetPassWord></ResetPassWord>,
  },
  {
    path: "/verification",
    element: <Verification></Verification>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/completed",
    element: <Completed></Completed>,
  },
  {
    path: "/pending",
    element: <Pending></Pending>,
  },
  {
    path: "/overdue",
    element: <Overdue></Overdue>,
  },
  {
    path: "/today",
    element: <Home></Home>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoContext>
      <RouterProvider router={router} />
      <div>
        <Toaster />
      </div>
    </TodoContext>
  </StrictMode>
);
