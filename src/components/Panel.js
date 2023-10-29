import Button from "../components/Button";
import PhotoBox from "../components/PhotoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

import "../assets/styles/Panel.scss";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";

export default function Panel() {
  const navigate = useNavigate();
  const handleGoBackClick = () => {
    navigate("/");
  };

  return (
    <div className="panel">
      <div className="panel-avatar">
        <PhotoBox name="Dilbər Əmrahova"
        className2='panel-avatar__name'
          />
      </div>

      <Navigation></Navigation>

      <Button
        onClick={handleGoBackClick}
        className="panel__button"
        icon={<FontAwesomeIcon icon={faChevronLeft} />}
        text="Go back"
      />
    </div>
  );
}
