import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { ClerkProvider } from "@clerk/clerk-react";

if (!process?.env?.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const publishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <ThemeProvider>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </ClerkProvider>
  </React.StrictMode>
);
