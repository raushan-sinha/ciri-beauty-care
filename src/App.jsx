import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import WomenPage from "./pages/WomenPage";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<WomenPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}