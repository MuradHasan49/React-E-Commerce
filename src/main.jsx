import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; // Keep App import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx"

import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About/About.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Login from "./Pages/Login.jsx";

// main.jsx
const router1 = createBrowserRouter([
  {
    path: "/",
    Component: Layout, // ← Uses your Layout component
    children: [
      { index: true, Component: App },     
      { path: "contact", Component: Contact },
      { path: "About", Component: About },
      { path: "SignUp", Component: SignUp },
      { path: "Login", Component: Login },
    ],
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router1} />
  </StrictMode>
);

