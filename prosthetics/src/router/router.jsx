import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import AuthPageLayout from "../pages/auth/authPageLayout";
import SignInPage from "../pages/auth/signIn/signInPage";
import SignUpPage from "../pages/auth/signUp/signUpPage";
import Layout from "../common/components/layout";
import CatalogPage from "../pages/catalog/catalogPage";
import ProstheticDetailsPage from "../pages/prostheticDetails/prostheticDetailsPage";
import AboutPage from "../pages/about/aboutPage";
import FormPage from "../pages/form/formPage";
import ProfilePage from "../pages/profile/profilePage";
import NotFoundPage from "../pages/404/notFoundPage";
import ProtectedRoute from "./protectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/auth" element={<AuthPageLayout />} />

        {/* MAIN LAYOUT */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<ProstheticDetailsPage />} />
          <Route path="about" element={<AboutPage />} />
          
          <Route
            path="form"
            element={
              <ProtectedRoute allowedRoles={["User", "Admin"]}>
                <FormPage />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="profile"
            element={
              <ProtectedRoute allowedRoles={["User", "Admin"]}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* NOT FOUND */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
