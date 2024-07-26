import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Root/Navbar";
import Home from "./Root/Routes/Home";
import Shows from "./Root/Routes/Shows";
import Footer from "./Components/Footer";
import About from "./Root/Routes/About";
import Contact from "./Root/Routes/Contact";

function App() {
  const [mode, setMode] = useState("light");
  const body = document.body;

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
    body.style.background = mode === "light" ? "#1d2a35" : "white";
    body.style.color = mode === "light" ? "white" : "#000";
  };

  const customStyle1 = {
    // Little Light
    background: mode === "light" ? "#eee" : "#38444d",
    color: mode === "light" ? "#000" : "#ddd",
  };

  const customStyle2 = {
    // Little Dark
    background: mode === "light" ? "white" : "#15202B",
    color: mode === "light" ? "#000" : "#ddd",
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar toggleTheme={toggleTheme} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "shows",
          element: (
            <Shows customStyle1={customStyle1} customStyle2={customStyle2} />
          ),
        },
        {
          path: "about",
          element: (
            <About customStyle1={customStyle1} customStyle2={customStyle2} />
          ),
        },
        {
          path: "contact",
          element: <Contact customStyle1={customStyle1} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer mode={mode} />
    </>
  );
}

export default App;
