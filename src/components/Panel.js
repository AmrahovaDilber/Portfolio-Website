import Button from "../components/Button.js";
import PhotoBox from "../components/PhotoBox.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../components/Navigation.js";
import { useNavigate } from "react-router-dom";

export default function Panel({ collapsed, onCollapse }) {
  const navigate = useNavigate();
  const handleGoBackClick = () => {
    navigate("/");
  };

  return (
    <aside className={`panel ${collapsed ? "collapsed" : ""}`}>
      <div className="panel-avatar">
        <PhotoBox
          name="Dilbər Əmrahova"
          alt="img"
          className="myimage2"
          className2="panel-avatar__name"
        />
      </div>

      <Navigation></Navigation>

      <Button
        onClick={handleGoBackClick}
        className="panel__button"
        icon={<FontAwesomeIcon icon={faChevronLeft} />}
        text="Go back"
      />
      <button onClick={onCollapse} className="collapse-btn">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </aside>
  );
}
