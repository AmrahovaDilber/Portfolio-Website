import { useState } from "react";
import Panel from "../components/Panel";
import Box from "../components/Box";
import TimeLine from "../components/TimeLine";
import Expertise from "../components/Expertise";
import Portfolio from "../components/Portfolio";
import Feedback from "../components/Feedback";
import Button from "../components/Button";
import Address from "../components/Address";
import About from '../components/About'
import "../assets/styles/Inner.scss";
// back-to-top button
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  timeLineData,
  experienceData,
  feedbackData,
  portfolioData,
} from "../utils/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Inner = () => {
  const [isPanelOpen, setPanelOpen] = useState(true);
  const togglePanel = () => {
    setPanelOpen(!isPanelOpen);
  };
  // back-to-top button
  const handleUpButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="main">
      <div className={`main__sidebar ${isPanelOpen ? "open" : "closed"}`}>
        <Panel
        className='name'></Panel>
      </div>
      <div className="main-content">
        <Button
          icon={<FontAwesomeIcon icon={faBars} onClick={togglePanel} />}
        />
        <div className="content">
          <About></About>
          <TimeLine id={"education"} data={timeLineData} />
          <Expertise data={experienceData} />
          <Portfolio data={portfolioData} />
          <Address ></Address>
          <Feedback data={feedbackData} />
          {/* Back-to-top button */}
          <div className="back-to-top-button" onClick={handleUpButtonClick}>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inner;
