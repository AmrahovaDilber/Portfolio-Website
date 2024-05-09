import { useState } from "react";
import Panel from "../components/Panel.js";
import TimeLine from "../components/TimeLine.js";
import Expertise from "../components/Expertise.js";
import Portfolio from "../components/Portfolio.js";
import Feedback from "../components/Feedback.js";
import Address from "../components/Address.js";
import About from "../components/About.js";
import Skills from "../components/Skills.js";
import Back from "../components/BackToTop.js";
import "../assets/styles/Inner.scss";
import { experienceData, feedbackData, portfolioData } from "../utils/data.js";

const Inner = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="main">
      <aside className="main--sidebar">
        <Panel
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        />
      </aside>

      <section className={`container ${collapsed ? "collapsed" : ""}`}>
        <About></About>
        <TimeLine />
        <Expertise data={experienceData} />
        <Skills></Skills>

        <Portfolio data={portfolioData} />
        <Address></Address>
        <Feedback data={feedbackData} />
        {/* Back-to-top button */}
        <Back></Back>
      </section>
    </div>
  );
};

export default Inner;
