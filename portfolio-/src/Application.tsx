import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/layouts/HomeLayout/HomeLayout";
import { ROUTES } from "./utils/constants";
import Errorpage from "./components/pages/ErrorPage/Errorpage";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import Home from "./components/pages/Home/Home";

const Application = () => {
    const router = createBrowserRouter([
        {
            path: ROUTES.HOME,
            element: <HomeLayout />,
            ErrorBoundary: Errorpage,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
            ]
        },
        {
            path: "*",
            element: <PageNotFound />,
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Application
