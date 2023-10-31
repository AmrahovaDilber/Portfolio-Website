import React, { useState } from "react";
import { Link } from "react-scroll";
import { navlist } from "../utils/navList";

function Navigation() {
  const [activeTab, setActiveTab] = useState("aboutMe");

  return (
    <nav className="nav">
      <ul className="nav-list">
        {navlist.map((list) => (
          <li key={list.id}>
            <Link
              to={list.to}
              className={`nav-link ${activeTab === list.to ? "active" : ""}`}
              onClick={() => setActiveTab(list.to)}
            >
              <div className="nav-item-wrapper">
                <span>{list.icon}</span>
                <span className="nav-text">{list.list}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
