import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Desktop } from "./screens/Desktop/Desktop";
import "./global.css";
createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Desktop />
  </StrictMode>,
);
