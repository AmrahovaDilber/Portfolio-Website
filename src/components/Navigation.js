import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {
  faUser,
  faGraduationCap,
  faPen,
  faSuitcase,
  faLocationArrow,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Navigation.scss";

const NavItem = ({ icon, text, href }) => (
  <li className="navbar__list-item">
    <FontAwesomeIcon icon={icon} />
    <a href={href}>{text}</a>
  </li>
);
const Navigation = () => {
  const navItems = [
    { icon: faUser, text: "About me", href: "#about" },
    { icon: faGraduationCap, text: "Education", href: "#education" },
    { icon: faPen, text: "Experience", href: "#experience" },
    { icon: faSuitcase, text: "Portfolio", href: "#portfolio" },
    { icon: faLocationArrow, text: "Contacts", href: "#contacts" },
    { icon: faComment, text: "Feedbacks", href: "#feedbacks" },
  ];

  return (
    <div className="navbar">
      <ul className="navbar__list">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};
NavItem.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Navigation;
