import React from "react"

export function AboutScreen() {
    return(
        <>
            <section id="about" className="about">
                <div className="container">

                    <div className="section-title">
                        <h2>A Propos de Moi</h2>
                        <p>
                            Bonjour ! Je m’appelle Efrem Sitsou Selinam KOUDOH, je suis un développeur Web & Mobile junior et actuellement étudiant à l'ESAIP à Angers.

                            Après avoir suivi une formation en maintenance informatique, j'ai découvert ma passion pour l'informatique côté logiciel. Cela m'a conduit à 
                            poursuivre des études en Développement d'Applications, où j'ai acquis de solides compétences en Programmation, Bases de données, Conception 
                            d'interfaces utilisateur, et bien plus encore. En parallèle, j'ai également développé d'importantes qualités relationnelles.
                        </p>
                        <p>
                            Grâce à une opportunité de stage, j'ai eu l'occasion de démontrer mon excellence en tant que développeur, ce qui m'a valu d'être embauché par 
                            l'entreprise en septembre 2021. Depuis lors, j'ai travaillé sur divers projets, améliorant constamment mes compétences et développant de nouvelles idées.

                            Mon expérience jusqu'en avril 2023 m'a permis de devenir un développeur compétent, et je continue à m'épanouir chaque jour avec une envie et une motivation inépuisables.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src="assets/image/photo.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>Concepteur d'Application Web &amp; Mobile.</h3>
                            <p className="fst-italic">
                                Je suis passionné par les technologies web et mobiles, et je suis constamment à la recherche de nouveaux défis pour enrichir mes connaissances 
                                et développer des solutions innovantes.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Date de Naissance:</strong> <span>03 mars 1999</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Telephone:</strong> <span>+228 92 35 05 64</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Ville:</strong> <span>Lomé, TOGO</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Junior</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>koudoh.efrem.sitsou@gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Stage ou Alternance:</strong> <span>Disponible</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Disponible</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                J'ai hâte de partager mes compétences et mon enthousiasme avec le monde du développement d'applications !

                                N'hésitez pas à me contacter pour toute collaboration ou projet intéressant.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}