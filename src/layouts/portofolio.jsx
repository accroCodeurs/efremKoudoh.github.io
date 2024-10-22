import React, { useState } from "react";
import data from "../data.json";

export function PortofolioScreen() {
  const [filter, setFilter] = useState("*");

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  return (
    <>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>
              Ci-dessous, quelques exemples de réalisations effectuées durant la
              formation, le stage et plus encore :
            </p>
          </div>

          {/*<div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li
                  onClick={() => handleFilterClick("*")}
                  className={filter === "*" ? "filter-active" : ""}
                >
                  All
                </li>
                <li
                  onClick={() => handleFilterClick("filter-app")}
                  className={filter === "filter-app" ? "filter-active" : ""}
                >
                  App
                </li>
                <li
                  onClick={() => handleFilterClick("filter-web")}
                  className={filter === "filter-web" ? "filter-active" : ""}
                >
                  Web
                </li>
              </ul>
            </div>
          </div>*/}

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {data
              .filter((item) => filter === "*" || item.filter === filter)
              .map((item) => (
                <div
                  key={item.id}
                  className={`col-lg-4 col-md-6 portfolio-item ${item.filter}`}
                >
                  <div className="portfolio-wrap">
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt={item.nom}
                      style={{
                        width: "500px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="portfolio-links">
                      <a
                        href={item.image}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title={item.nom}
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a
                        href={item.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="More Details"
                      >
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                  <h3>{item.nom}</h3>
                  <p>{item.categorie}</p>
                  <p>État : {item.etat}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
