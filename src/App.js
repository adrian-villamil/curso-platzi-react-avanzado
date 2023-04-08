import React from "react";
import { Logo } from "./components/Logo";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from "./pages/Detail";

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:categoryId" element={<Home />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};