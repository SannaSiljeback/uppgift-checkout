import { createBrowserRouter } from "react-router-dom";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Payment } from "./components/Payment";
import { Register } from "./components/Register";
import { Confirmation } from "./pages/Confirmation";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";

export const Router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
        {
            path: "/",
            element: <Home />,
            errorElement: <NotFound />,
        },
        {
            path: "/register",
            element: <Register />,
            errorElement: <NotFound />,
        },
        {
            path: "/login",
            element: <Login />,
            errorElement: <NotFound />,
        },
        {
            path: "/logout",
            element: <Logout />,
            errorElement: <NotFound />,
        },
        {
            path: "/payment",
            element: <Payment />,
            errorElement: <NotFound />,
        },
        {
            path: "/confirmation",
            element: <Confirmation />,
            errorElement: <NotFound />,
        }
    ]
}]);