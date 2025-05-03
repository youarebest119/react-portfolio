import { AnimatePresence } from "framer-motion";
import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-us",
      element: <About />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
  ])

  const location = useLocation();
  if (!element) return null;

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </>
  );
}

export default App;
