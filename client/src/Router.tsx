import { createBrowserRouter } from "react-router-dom";
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
        }, //en payment sida? vilka sidor mer? kassa? shopping? cancelation? conditional rendering??
        {
            path: "/confirmation",
            element: <Confirmation />,
            errorElement: <NotFound />,
        }
    ]
}]);