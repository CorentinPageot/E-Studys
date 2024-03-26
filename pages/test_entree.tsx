import React, { useState } from 'react';
import '../src/css/style.css';
import ContinuerBtn from "../src/features/layout/btn/ContinuerBtn";
import Menu from "../src/features/layout/Menu";
import Image from 'next/image';

const QuestionnairePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#b6e0f9', minHeight: '100vh', position: 'relative' }}>
      
      <Menu link1="/test_entree" link2="/" />

      {/* Logo de l'application */}
      <div style={{ textAlign: 'center', paddingTop: '11.5rem' }}>
        <Image src="/img/logo.png" width={100} height={200} alt="Logo E-Studys" style={{ height: 'auto' }} />
      </div>

      <div style={{ position: 'relative', margin: '20px 20%', maxWidth: '400px' }}>
        <div style={{ backgroundColor: 'white', padding: '20px 30px', borderRadius: '15px', position: 'relative', borderBottom: '1px solid gray', borderRight: '1px solid gray' }}>
          <p style={{ margin: 0 }}>
            Bienvenue sur E-Studys ! Nous sommes là pour vous aider. Nous allons procéder à un test pour statuer sur vos potentielles difficultés.
          </p>
          {/* Flèche pointant vers le haut */}
          <div style={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)', width: '0', height: '0', borderBottom: '10px solid white', borderLeft: '10px solid transparent', borderRight: '10px solid transparent' }} />
        </div>
      </div>

      {/* Bouton Continuer */}
      <div className="" style={{ position: 'absolute', bottom: '5%', textAlign: 'center' }}>
        <p style={{ textAlign: 'left', marginBottom: '20px', padding: '0 50px' }}>Ceci est un test indicatif et non pas un diagnostic précis. Pour connaître vos difficultés précises, veuillez consulter un professionnel.</p>
        <ContinuerBtn href="/test_entree_template" />
      </div>
    </div>
  );
};

export default QuestionnairePage;
