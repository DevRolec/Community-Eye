// src/components/AbiaNews.js
import React, { useEffect, useState } from "react";
import "./News.css";

const AbiaNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5111/api/abia-news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading Abia State news...</p>;

  return (
    <div className="news-container">
      <h2 className="headline">📰 Latest News from Abia State</h2>
      {news.map((item, index) => (
        <div className="news-card" key={index}>
          <div className="news-left">
            <h3>{item.title}</h3>
            <p>{item.description || "No summary provided."}</p>
            <div className="meta">
              <span>📌 Source: {item.source_id}</span>
              <span>📅 {new Date(item.pubDate).toLocaleDateString()}</span>
            </div>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              🔗 Read Full Article
            </a>
          </div>
          <div className="news-image">
            {item.image_url && <img src={item.image_url} alt="News visual" />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AbiaNews;

// Inside map
