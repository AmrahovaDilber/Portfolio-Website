import React from "react";
import "../assets/styles/timeline.scss";

function TimeLine({ data, id }) {
  return (
    <div id={id} className="timeline">
      <h1>Education</h1>
      {data.map((event, index) => (
        <div className="timeline-event" key={index}>
          <div className="event">
            <div className="event__date">{event.date}</div>
            <div className="event__line"></div>
          </div>

          <div className="event-details">
            <h3 className="event-details__title">{event.title}</h3>
            <p className="event-details__text">{event.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TimeLine;

