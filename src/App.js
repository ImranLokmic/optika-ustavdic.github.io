import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Stores from "./pages/Stores";
import Offers from "./pages/Offers";
import Assistent from "./pages/Assistent";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/radnje" element={<Stores />} />
        <Route path="/ponuda" element={<Offers />} />
        <Route path="/asistent" element={<Assistent />} />
        <Route path="/onama" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
