import React from "react";
import Box from "../components/Box"; 
import Info from "../components/Info.js";

const Feedback = ({ data }) => {
  return (
    <Box id="feedbacks" title="Feedback" className="feedback-list">
      {data.map((feedbackItem, index) => (
        <div className="feedback" key={index}>
          <div>
            <Info feedback={feedbackItem.feedback}></Info>
          </div>

          <div className="reporter">
            <img
              src={feedbackItem.reporter.photoUrl}
              alt="img"
              className="reporter__photo"
            />
            <div className="reporter-name">
              {feedbackItem.reporter.name},
              <a
                href={feedbackItem.reporter.citeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cite-link"
              >
                {feedbackItem.reporter.citeUrl}
              </a>
            </div>
          </div>
        </div>
      ))}
    </Box>
  );
};

export default Feedback;
