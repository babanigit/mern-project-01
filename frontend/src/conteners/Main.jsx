import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./signIn/SignIn";
import SignUp from "./signup/SignUp";
import Home from "../pages/homePage/Home";

const Main = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
