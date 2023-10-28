import React from "react";
import { Link } from "react-scroll";
import { navlist } from "../utils/navList";
import { useState } from "react";
import "../assets/styles/Navigation.scss";

function Navigation() {
  const [activeTab, setactiveTab] = useState("aboutMe");

  const navList = navlist.map((list) => (
    <li key={list.id}>
      <Link
        to={list.to}
        className={`nav-link ${activeTab === list.to ? "active" : ""}`}
        onClick={() => setactiveTab(list.to)}
      >
        <div className="nav-item-wrapper">
          <span>{list.icon}</span>
          <span className="nav-text">{list.list}</span>
        </div>
      </Link>
    </li>
  ));

  return (
    <nav className="nav">
      <ul className="nav-list">{navList}</ul>
    </nav>
  );
}

export default Navigation;
