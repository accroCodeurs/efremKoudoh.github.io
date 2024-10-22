import React, { useState, useEffect } from "react";

export default function PourcentageScreen() {
  const skillsData = [
    { name: "HTML/CSS", value: "Intermediaire", target: "Avancé" },
    { name: "PHP/Laravel/Symfony", value: 70, target: "Intermediaire" },
    { name: "JavaScript/Reactjs/React Native", value: 80, target: "Intermediaire" },
    { name: "Node.js", value: 70, target: "Intermediaire" },
    { name: "MySql/MongoDB", value: 80, target: "Intermediaire" },
  ];

  const skillsResaux = [
    { name: "Modèles et Protocoles : OSI, TCP-IP, HTTP, DNS, DHCP", target: "Avancé" },
    { name: "Adressage et Routage : IPv4/IPv6, VLAN, routage statique",  target: "Intermediaire" },
    { name: "Sécurité : Pare-feu, VPN", target: "Intermediaire" },
    { name: "Outils & Systèmes : Wireshark, Linux, Windows, PfSense",  target: "Intermediaire" },
    { name: "Cloud & Soft Skills : Notions AWS/Azure, résolution de problèmes, travail en équipe",  target: "Intermediaire" },
  ];

  const [skills, setSkills] = useState(skillsData);
  const [skillResaux, setSkillResaux] = useState(skillsResaux);

  useEffect(() => {
    const interval = setInterval(() => {
      // Augmenter progressivement les valeurs des compétences jusqu'à leurs valeurs cibles
      setSkills((prevSkills) =>
        prevSkills.map((skill) => ({
          ...skill,
          value: skill.value < skill.target ? skill.value + 1 : skill.target,
        }))
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Compétences</h2>
            <p>
              Elles sont en constantes améliorations car pour moi la joie de ce métier fait que l’on en apprend tous les jours, d’autant plus en étant impliqué, curieux et passionné.
            </p>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6" data-aos="fade-up">
              {skills.slice(0, 10).map((skill) => (
                <div className="progress" key={skill.name}>
                  <span className="skill">
                    {skill.name} 
                  </span>
                  
                </div>
              ))}
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              {skillResaux.slice(0, 10).map((skill) => (
                <div className="progress" key={skill.name}>
                  <span className="skill">
                    {skill.name} 
                  </span>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
