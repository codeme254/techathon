import React from "react";
import NewsCard from "./NewsCard";

import newsImg1 from "../assets/images/news-img1.jpg";
import newsImg2 from "../assets/images/event-hall.jpg";
import newsImg3 from "../assets/images/event-venue.jpg";

const News = () => {
  return (
    <section className="news-section">
      <div className="news__container">
        <NewsCard
          linkToFullRed="/"
          image={newsImg1}
          subtitle="elon musk buys twitter and says..."
          tag="tech business"
        />
        <NewsCard
          linkToFullRed="/"
          image={newsImg2}
          subtitle="get a github account and start coding your future"
          tag="tech business"
        />
        <NewsCard
          linkToFullRed="/"
          image={newsImg3}
          subtitle="ranked programming languages 2022"
          tag="tech business"
        />
      </div>
    </section>
  );
};

export default News;
