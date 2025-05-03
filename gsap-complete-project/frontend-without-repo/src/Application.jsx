
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Homepage from './components/pages/Homepage/Homepage';

const Application = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Homepage />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
            ]
        }
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Application
