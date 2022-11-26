import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import AddDoctor from "../../Pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import Payment from "../../Pages/DashBoard/DashBoard/Payment/Payment";
import ManageDoctor from "../../Pages/DashBoard/ManageDoctor/ManageDoctor";
import MyAppoinment from "../../Pages/DashBoard/MyAppoinment/MyAppoinment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/regitration',
                element: <Registration></Registration>
            },
            {
                path: '/appoinment',
                element: <Appoinment></Appoinment>
            }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppoinment></MyAppoinment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute> <AddDoctor></AddDoctor> </AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctor></ManageDoctor> </AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://doctor-portal-server-delta.vercel.app/bookings/${params.id}`)
            }
        ]
    }
]);

export default router;