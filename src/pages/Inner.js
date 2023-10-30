import { useState } from "react";
import Panel from "../components/Panel";
import Box from "../components/Box";
import TimeLine from "../components/TimeLine";
import Expertise from "../components/Expertise";
import Portfolio from "../components/Portfolio";
import Feedback from "../components/Feedback";
import Button from "../components/Button";
import Address from "../components/Address";
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
        <Panel></Panel>
      </div>
      <div className="main-content">
        <Button
          icon={<FontAwesomeIcon icon={faBars} onClick={togglePanel} />}
        />
        <div className="content">
          <Box
            id={"aboutMe"}
            title="About me"
            content="My name is Dilbər Əmrahova, and I am a passionate student pursuing a degree in Information Technology at the University of Economics.
             I have embarked on an exciting journey to become a skilled front-end developer, where technology meets creativity, and user experiences come to life.
    I stay updated with the latest design trends and technologies, from HTML and CSS to JavaScript and React. I dive into the world of front-end tech, refining my skills to deliver outstanding results.
     I believe in the perfect blend of creativity and coding, transforming ideas into seamless digital experiences.In addition to my technical expertise,
      I hold certifications in web development that validate my skills and commitment to staying updated with industry standards. My passion for creating seamless digital experiences is complemented by my dedication to continuous learning.
      I thrive in dynamic environments, where I can leverage my creativity and coding abilities to transform ideas into engaging and user-friendly interfaces.My goal is to work on exciting tech projects that make a difference. I'm passionate about using technology to solve real-world problems and improve user experiences. I dream of contributing to the open-source community and, one day, starting my own tech company.
What drives me is the belief that technology can empower people and communities.
I aim to approach every project with creativity and enthusiasm, inspired by Maya Angelou's words: 'You can’t use up creativity.
The more you use, the more you have.' Here's to a future where innovation meets impact!"
          ></Box>
          <TimeLine id={"education"} data={timeLineData} />
          <Expertise id={"experience"} data={experienceData} />
          <Portfolio id={"portfolio"} data={portfolioData} />
          <Address id={"contacts"}></Address>
          <Feedback id={"feedbacks"} data={feedbackData} />
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
