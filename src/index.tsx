import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Main from "./layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutContent from "./components/pages/aboutContent";
import CryptoContent from "./components/pages/cryptoContent";
import MainPageContent from "./components/pages/mainPageContent";
import { AnimationsProvider } from "./components/AnimationToggle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AnimationsProvider>
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/crypto" element={<CryptoContent />} />
            <Route path="/about" element={<AboutContent />} />

            <Route path="/" element={<MainPageContent />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </AnimationsProvider>
  </React.StrictMode>
);

reportWebVitals(console.log);
