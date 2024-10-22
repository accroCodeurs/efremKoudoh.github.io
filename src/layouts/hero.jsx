import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';

export function HeroScreen() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      
      strings: ["Étudiant en Cybersécurité", "Développeur web & mobile", "Autodidacte"], 
      typeSpeed: 100, 
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Efrem S. S. KOUDOH</h1>
        <p>Je suis <span ref={typedRef} ></span></p> 
      </div>
    </section>
  );
}
