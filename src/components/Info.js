import "../assets/styles/Info.scss";

const Info = ({ feedback }) => {
  return (
    <div>
      <p className="feedback__text">{feedback}</p>
    </div>
  );
};

export default Info;
