import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Pages/Homepage/Homepage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import AddJobPage from "../Pages/AddJobPage/AddJobPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Homepage></Homepage>,
          // loader: () => fetch('http://localhost:5000/jobs')
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>,
        },
        {
          path: "/register",
          element: <RegisterPage></RegisterPage>,
        },
        {
          path: "/add-job",
          element: <AddJobPage></AddJobPage>,
        },
      ],
    },
  ]);


  export default router;
  