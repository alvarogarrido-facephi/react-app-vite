import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCourses from "./pages/AddCourses";
import ListCourses from "./pages/ListCourses";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UsersPage from "./pages/UsersPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./ProtectedRoute";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer autoClose={3000} position={"top-center"} hideProgressBar={true} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          <Route
            path="/addcourses"
            element={
              <ProtectedRoute>
                <AddCourses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/listcourses"
            element={
              <ProtectedRoute>
                <ListCourses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <UsersPage />
              </ProtectedRoute>
            }
          />

          {/* Default Page Active Todos */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ListCourses />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
