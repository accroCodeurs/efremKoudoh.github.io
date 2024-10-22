import React from "react"

export function AboutScreen() {
    return(
        <>
            <section id="about" className="about">
                <div className="container">

                    <div className="section-title">
                        <h2>A Propos de Moi</h2>
                        <p style={{ textAlign: "justify" }}> 
                            Bonjour ! Je m’appelle Efrem Sitsou Selinam KOUDOH, je suis développeur d'application et administrateur réseau junior ainsi qu'étudiant en Cybersécurité à l'ESAIP à Angers.

                            Après une formation en maintenance informatique, j'ai découvert ma passion pour l'informatique côté logiciel et réseaux. Cela m'a conduit à poursuivre 
                            des études en Développement d'Applications et en Réseaux, où j'ai acquis de solides compétences en programmation, gestion de bases de données, conception 
                            d'interfaces utilisateur, ainsi qu’en administration réseau, sécurité et gestion des infrastructures. En parallèle, j'ai aussi développé d'importantes 
                            compétences relationnelles et techniques pour mener à bien mes projets dans ces deux domaines.
                        </p>
                        <br/>
                        <p style={{ textAlign: "justify" }}>
                            Grâce à une opportunité de stage, j'ai eu l'occasion de démontrer mon excellence en tant que développeur, ce qui m'a valu d'être embauché par 
                            l'entreprise en septembre 2021. Depuis lors, j'ai travaillé sur divers projets, améliorant constamment mes compétences et développant de nouvelles idées.

                            Mon expérience jusqu'en avril 2023 m'a permis de devenir un développeur compétent, et je continue à m'épanouir chaque jour avec une envie et une motivation inépuisables.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src="assets/image/photos.jpeg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>Concepteur d'Application &amp; Administrateur réseaux.</h3>
                            <p className="fst-italic">
                                Je suis passionné par les nouvelles technologies, et je suis constamment à la recherche de nouveaux défis pour enrichir mes connaissances 
                                et développer des solutions innovantes.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Date de Naissance:</strong> <span>03 mars 1999</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Telephone:</strong> <span>+33 0758648534</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Ville:</strong> <span>Lomé, TOGO</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Niveau:</strong> <span>Junior</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>koudoh.efrem.s@gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Offre:</strong> <span>Stage ou Alternance</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Disponibilité:</strong> <span>Immédiate</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                J'ai hâte de partager mes compétences et mon enthousiasme avec le monde du développement d'applications !

                                
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}