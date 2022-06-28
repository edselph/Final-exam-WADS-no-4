import React from "react";
import Header from "./components/Header";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <main>
      <Header />
      <div className="main">
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/products" element={<Products />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/signup" element={<Signup />} exact />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
              exact
            />
          </Routes>
        </AuthContextProvider>
      </div>
    </main>
  );
};

export default App;
