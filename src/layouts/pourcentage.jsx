import React, { useState, useEffect } from "react";

export default function PourcentageScreen() {
  const skillsData = [
    { name: "HTML", value: 100, target: 100 },
    { name: "CSS", value: 60, target: 60 },
    { name: "JavaScript", value: 75, target: 75 },
    { name: "PHP", value: 80, target: 80 },
    { name: "WordPress/CMS", value: 90, target: 90 },
    { name: "Laravel", value: 80, target: 80 },
    { name: "Symfony", value: 60, target: 60 },
    { name: "Reactjs/React Native", value: 70, target: 70 },
    { name: "Node.js", value: 70, target: 70 },
    { name: "MySql", value: 80, target: 80 },
    
  ];

  const [skills, setSkills] = useState(skillsData);

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
              {skills.slice(0, 5).map((skill) => (
                <div className="progress" key={skill.name}>
                  <span className="skill">
                    {skill.name} <i className="val">{skill.value}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              {skills.slice(5).map((skill) => (
                <div className="progress" key={skill.name}>
                  <span className="skill">
                    {skill.name} <i className="val">{skill.value}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
