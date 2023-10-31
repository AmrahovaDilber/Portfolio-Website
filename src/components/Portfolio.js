import { useEffect, useMemo, useState } from "react";
import { portfolioData } from "../utils/data";
import Box from "../components/Box";
import { Link } from "react-router-dom";

const Portfolio = () => {
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
    <Box id="portfolio" title="Portfolio" className="portfolio-container">
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
    </Box>
  );
};

export default Portfolio;
