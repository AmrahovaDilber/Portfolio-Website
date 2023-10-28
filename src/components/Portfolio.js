import { useEffect, useMemo, useState } from "react";
import { portfolioData } from "../utils/data";
import { Link } from "react-router-dom";
import "../assets/styles/Portfolio.scss";

const Portfolio = ({ id }) => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setData(portfolioData);
  }, []);

  const displayData = useMemo(() => {
    if (activeTab === "all") {
      return data;
    } else {
      return data.filter((item) => item.category === activeTab);
    }
  }, [data, activeTab]);

  return (
    
    <section className="portfolio-container" id={id}>
      <h1>Portfolio</h1>
      <ul className="tabs">
        <li
          className={`tabs-item ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </li>
        <li
          className={`tabs-item ${activeTab === "ui" ? "active" : ""}`}
          onClick={() => setActiveTab("ui")}
        >
          UI
        </li>
        <li
          className={`tabs-item ${activeTab === "code" ? "active" : ""}`}
          onClick={() => setActiveTab("code")}
        >
          Code
        </li>
      </ul>

      <section className="portfolio-box">
        {displayData.map((item) => (
          <article key={item.title} className="portfolio-box__item">
            <img src={item.img} alt={item.title} />
            <div className="portfolio-box__item-overlay">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <Link to={item.url} target="_blank" rel="noopener noreferrer">
                View Source
              </Link>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Portfolio;
