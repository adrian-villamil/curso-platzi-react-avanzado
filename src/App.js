import React from "react";
import { Logo } from "./components/Logo";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NoRegisteredUser } from "./pages/NoRegisteredUser";

const isLogged = true;

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
          <Route path="/favs" element={isLogged ? <Favs /> : <NoRegisteredUser /> } />
          <Route path="/user" element={isLogged ? <User /> : <NoRegisteredUser /> } />
          <Route path="*" element={<p>There is nothing here: 404!</p>} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  );
};