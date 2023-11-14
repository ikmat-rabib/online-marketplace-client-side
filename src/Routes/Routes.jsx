import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Pages/Homepage/Homepage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import AddJobPage from "../Pages/AddJobPage/AddJobPage";
import JobDetailPage from "../Pages/JobDetailPage/JobDetailPage";
import PrivateRoute from "../Providers/PrivateRoute";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import MyBidsJob from "../Pages/MyBidsJob/MyBidsJob";
import BidRequestPage from "../Pages/BidRequestPage/BidRequestPage";
import UpdatedJob from "../Pages/UpdatedJob/UpdatedJob";

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
          element: <PrivateRoute><AddJobPage></AddJobPage></PrivateRoute>,
        },
        {
          path: "/update-job/:id",
          element: <PrivateRoute><UpdatedJob></UpdatedJob></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/job/${params.id}`)
        },
        {
          path: "/job/:id",
          element: <PrivateRoute><JobDetailPage></JobDetailPage></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/job/${params.id}`)
        },
        {
          path: "/posted-job",
          element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>,
        },
        {
          path: "/bids",
          element: <PrivateRoute><MyBidsJob></MyBidsJob></PrivateRoute>,
        },
        {
          path: "/bid-request",
          element: <PrivateRoute><BidRequestPage></BidRequestPage></PrivateRoute>,
        },
      ],
    },
  ]);


  export default router;
  