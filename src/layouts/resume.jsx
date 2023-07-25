import React from "react";

export function ResumeScreen() {
  return (
    <>
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <p>
              L'apprentissage est le père de la compétence.
            </p>
            <p>
              --- Simon de Bignicourt
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Sommaire</h3>
              <div className="resume-item pb-0">
                <h4>Efrem Sitsou Selinam KOUDOH</h4>
                <p>
                  <em>
                    Etudiant en troisieme année ingenieur informatique à ESAIP aprés mon BAC+2 pour ainsi agrandir mes connaissance dans la matiére et mes relations
                  </em>
                </p>
                <ul>
                  <li>Angers, France</li>
                  <li>(228) 92 35 05 64</li>
                  <li>ekoudoh.efrem.sitsou@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Formation Modulaire Maintenance Informatique</h4>
                <h5>2017 - 2018</h5>
                <p>
                  <em>CIB-INTA, Lomé, TOGO</em>
                </p>
                <p>
                  Formation modulaire en maintenance des équipement informatique et réseaux.
                </p>
              </div>
              <div className="resume-item">
                <h4>Brevet de Technicien Superieur Developpement d'Application</h4>
                <h5>2018 - 2020</h5>
                <p>
                  <em>Institut Polytechnique DEFITECH, Lomé, TOGO</em>
                </p>
                <p>
                  Obtention du diplôme de développeur d'application avec mention et troisième de ma promotion.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Developpeur d'Aplication web & mobile</h4>
                <h5>2021 - 2023</h5>
                <p>
                  <em>CAGESI, Lomé, TOGO </em>
                </p>
                <ul>
                  <li>
                    Création de solutions pour pages web 
                  </li>
                  <li>
                    Développement de stratégies de Web responsive 
                  </li>
                  <li>
                    Développement des applications mobile
                  </li>
                  <li>
                    Gestion de la planification 
                  </li>
                  <li>
                    Définition du besoin en logiciels auprès du client 
                  </li>
                  <li>
                    Définition des fonctionnalités á créer 
                  </li>
                  <li>
                    Analyse de l'ergonomie d'applications
                  </li>
                  <li>
                    Conception de programmes spécifiques 
                  </li>
                  <li>
                    Collaboration avec des graphistes pour création d'applications 
                  </li>
                  <li>
                    Mises á jour de fonctionnalités sur les logiciels 
                  </li>
                  <li>
                    
                    Contacts avec sociétés clientes 
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Developpeur web</h4>
                <h5>2020 - 2021</h5>
                <p>
                  <em>CAGESI, Lomé, TOGO</em>
                </p>
                <ul>
                  <li>
                    Stage pratique au sein du cabinet CAGESI Sarl comme developpeur d 'application web, mobile et desktop.
                  </li>
                  <li>
                    Création de solutions pour pages web 
                  </li>
                  <li>
                    Développement de stratégies de Web responsive 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
