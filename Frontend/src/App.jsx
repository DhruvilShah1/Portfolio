import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./assets/Navbar";
import HomePage from "./assets/HomePage";
import Projects from "./assets/Projects";
import Contact from "./assets/Contact";
import Opportunities from "./assets/Opportunities";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Opportunities" element={<Opportunities />} />

        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;