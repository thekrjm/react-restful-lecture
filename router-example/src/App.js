import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./components/AboutPage";
import { HomePage } from "./components/HomePage";
import { ProductPage } from "./components/ProductPage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { LoginPage } from "./components/LoginPage";
import { useState } from "react";
import { UserPage } from "./components/UserPage";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate === true ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user" element={<PrivateRoute />} />
    </Routes>
  );
}

export default App;
