import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Example product routes — add as many as you like */}
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
