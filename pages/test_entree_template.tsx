import React, { useState } from 'react';
import '../src/css/style.css';
import JamaisBtn from "../src/features/layout/btn/JamaisBtn";
import ParfoisBtn from "../src/features/layout/btn/ParfoisBtn";
import SouventBtn from "../src/features/layout/btn/SouventBtn";
import Menu from "../src/features/layout/Menu";
import Image from 'next/image';
import Link from 'next/link';

const ExercicePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#b6e0f9', minHeight: '100vh', position: 'relative' }}>
      
      <Menu link1="/test_entree" link2="/" />

      <div style={{ textAlign: 'center', paddingTop: '11.5rem' }}>
        <Image src="/img/logo.png" width={100} height={200} alt="Logo E-Studys" style={{ height: 'auto' }} />
      </div>

      <div style={{ textAlign: 'center', margin: '50px 0', padding: '0 50px' }}>
        <p>Vous pouvez lire et relire de nombreuses fois une phrase, ou même un paragraphe sans le comprendre ?</p>
      </div>
      
      {/* Bouton Continuer */}
      <div className="" style={{ width: '100%', position: 'absolute', bottom: '5%', display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center' }}>
        <JamaisBtn />
        <ParfoisBtn />
        <SouventBtn />
      </div>
    </div>
  );
};

export default ExercicePage;
