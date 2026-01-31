import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthContext from "./context/AuthContext/AuthCOntext";
import AuthProvider from "./context/AuthContext/AuthProvider";

AOS.init();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-urbanist max-w-7xl mx-auto">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>,
);
