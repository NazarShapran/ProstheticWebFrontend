import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import AuthPageLayout from "../pages/auth/authPageLayout";
import SignInPage from "../pages/auth/signIn/signInPage";
import SignUpPage from "../pages/auth/signUp/signUpPage";
import Layout from "../common/components/layout";
import CatalogPage from "../pages/catalog/catalogPage";
import AboutPage from "../pages/about/aboutPage";
import FormPage from "../pages/form/formPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPageLayout />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/form" element={<FormPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
