// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Page from "./Page";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
