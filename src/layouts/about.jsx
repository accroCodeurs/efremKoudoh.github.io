import React from "react"

export function AboutScreen() {
    return(
        <>
            <section id="about" className="about">
                <div className="container">

                    <div className="section-title">
                        <h2>A Propos de Moi</h2>
                        <p>

                            Hello ! Je m’appelle Julien Dahy, développeur Web junior devenu Tech Manager.
                            Auparavant, j’ai effectué plusieurs années en tant que téléconseiller dans l’expertise technique (Canal+ / Orange)
                            ce qui m’a permis d’acquérir de très bonnes compétences telles que l’organisation, l’écoute, le conseil 
                            ainsi que des qualités relationnelles importantes.
                            J’ai profité du retour à mon Alsace natale pour effectuer une reconversion professionnelle dans le
                            Développement Web, domaine qui m’intéressait depuis de nombreuses années.
                            J’ai donc suivi la formation Développeur Intégrateur au sein du CCI Campus de Colmar. Suite à 
                            l’obtention du Bac+2, j’ai obtenu la confiance d’Annei qui m’a embauché en septembre 2020 et chez 
                            qui je suis devenu Tech Manager en 2022. Je continue donc à travailler chaque jour avec envie, motivation et des idées plein la tête.

                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>Concepteur d'Application Web &amp; Mobile.</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Date de Naissance:</strong> <span>03 mars 1999</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Telephone:</strong> <span>+228 92 35 05 64</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Ville:</strong> <span>Lomé, TOGO</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Junior</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>koudoh.efrem.sitsou@gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Disponible</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}