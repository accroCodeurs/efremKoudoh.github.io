import React from "react";

export function ServiceScreen() {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>
             
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4 className="title">
                <a href="">Gestion de projets web</a>
              </h4>
              <p className="description">
                Site vitrine, corporate, évènementiel, e-commerce, intranet,
                application mobile
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon">
                <i className="bi bi-card-checklist"></i>
              </div>
              <h4 className="title">
                <a href="">Responsive design</a>
              </h4>
              <p className="description">
              Compatible tous supports, tablette & application mobile.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon">
                <i className="bi bi-bar-chart"></i>
              </div>
              <h4 className="title">
                <a href="">Intégration Web</a>
              </h4>
              <p className="description">
                Des intégrations (X)HTML / CSS respectueuses des standards du
                Web
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon">
                <i className="bi bi-binoculars"></i>
              </div>
              <h4 className="title">
                <a href="">Développements spécifiques</a>
              </h4>
              <p className="description">
              Des outils adaptés à votre coeur de métier,
applications & solutions personnalisées
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon">
                <i className="bi bi-brightness-high"></i>
              </div>
              <h4 className="title">
                <a href="">Dynamisme des pages</a>
              </h4>
              <p className="description">
              Des animations de contenu non intrusives
pour embellir votre projet.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="icon">
                <i className="bi bi-calendar4-week"></i>
              </div>
              <h4 className="title">
                <a href="">Interface d'administration</a>
              </h4>
              <p className="description">
              Outils spécifiques au bon fonctionnement
de votre entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
