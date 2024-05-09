import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Back = () => {
  const handleUpButtonClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      className="back-to-top-button"
      onClick={handleUpButtonClick}
      data-testid="back-to-top-button"
    >
      <FontAwesomeIcon icon={faAngleUp} data-testid="back-to-top-icon" />
    </div>
  );
};

export default Back;
