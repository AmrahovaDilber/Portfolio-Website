import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Inner from "./pages/Inner.js";
import "./assets/styles/Address.scss";
import "./assets/styles/Box.scss";
import "./assets/styles/Expertise.scss";
import "./assets/styles/Feedback.scss";
import "./assets/styles/Navigation.scss";
import "./assets/styles/Panel.scss";
import "./assets/styles/PhotoBox.scss";
import "./assets/styles/Portfolio.scss";
import "./assets/styles/timeline.scss";
import "./assets/styles/skills.scss";
import "./assets/styles/Button.scss";
import "./assets/styles/Info.scss";

import "./App.scss";
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
