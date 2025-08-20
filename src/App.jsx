import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import BrandsPage from "./pages/BrandsPage";
import GlowGear from "./pages/GlowGear";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path='men' element={<MenPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/glowgear" element={<GlowGear />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}