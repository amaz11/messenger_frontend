import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import Signup from "../pages/auth/Signup";
import Error from "../components/404/Error";
import Layout from "../layout/Layout";
import ProtectedRoute from "../components/hoc/ProtectedRoute";
import OnAuthUser from "../components/hoc/OnAuthUser";

const useAuth = true
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <ProtectedRoute><Home /></ProtectedRoute>,
            },

            {
                path: '/signin',
                element: <OnAuthUser><SignIn /></OnAuthUser>,
            },
            {
                path: '/signup',
                element: <OnAuthUser><Signup /></OnAuthUser>,
            }
        ]
    },

])