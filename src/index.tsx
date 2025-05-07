import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/pages/mainPageContent";
import reportWebVitals from "./reportWebVitals";
import Main from "./layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutContent from "./components/pages/aboutContent";
import ContactUsContent from "./components/pages/contactUsContent";
import CryptoContent from "./components/pages/cryptoContent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/crypto" element={<CryptoContent />} />
          <Route path="/about" element={<AboutContent />} />
          <Route path="/contact-us" element={<ContactUsContent />} />

          <Route path="/" element={<App />} />
        </Routes>
      </Main>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(console.log);
