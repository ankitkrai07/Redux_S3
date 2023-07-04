import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AdminPage } from "./AdminPage";
import { LoginPage } from "./LoginPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/admin"} element={<AdminPage />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};

export default MainRoutes;
