import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inner from "./pages/Inner";
import './App.scss';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inner" element={<Inner />} />
      </Routes>
    </Router>
  );
};

export default App;
