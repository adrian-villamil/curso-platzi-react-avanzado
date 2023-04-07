import React from "react";
import { Logo } from "./components/Logo";
import { GlobalStyles } from "./styles/GlobalStyles";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detailId
        ? <PhotoCardWithQuery id={detailId} />
        : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pet/:categoryId" element={<Home />} />
            </Routes>
          </BrowserRouter>
        )
      }
    </>
  );
};