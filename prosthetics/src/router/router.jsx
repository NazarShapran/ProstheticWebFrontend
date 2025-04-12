import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import AuthPageLayout from "../pages/auth/authPageLayout";
import SignInPage from "../pages/auth/signIn/signInPage";
import SignUpPage from "../pages/auth/signUp/signUpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPageLayout />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
