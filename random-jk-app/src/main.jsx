import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Strict mode only affects development and does not run in production. So, even if you leave it enabled, the extra rendering will not happen in the production build.
