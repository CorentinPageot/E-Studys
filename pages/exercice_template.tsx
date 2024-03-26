import React, { useState } from 'react';
import '../src/css/style.css';
import LetterMbtn from "../src/features/layout/btn/LetterMbtn";
import LetterNbtn from "../src/features/layout/btn/LetterNbtn";
import Menu from "../src/features/layout/Menu";
import Image from 'next/image';

const ExercicePage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      
      <Menu link1="/exercice" link2="/homepage" />

      <div style={{padding: '100px 50px 0 50px'}}>
        <div style={{ backgroundColor: '#6fbb7b', borderRadius: '10px', padding: '10px', paddingLeft: '100px', textAlign: 'left', width: 'auto', position: 'relative', backgroundImage: 'url("/img/logo_header.svg")', backgroundPosition: '5% 100%', backgroundRepeat: 'no-repeat' }}>
            <h4 style={{ fontSize: '17px', margin: '5px' }}>Trie l'animal</h4>
            <p style={{ fontSize: '14px', margin: '5px' }}>Travaille le "n" et le "m"</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '10rem' }}>
        <Image src="/img/Renard.svg" width={250} height={220} alt="Image de renard" style={{ height: 'auto' }} />
        <Image src="/img/shadow.svg" width={210} height={20} alt="Ombre de l'image" style={{ height: 'auto' }} />
      </div>
      
      {/* Bouton Continuer */}
      <div className="" style={{ width: '100%', position: 'absolute', bottom: '5%', display: 'flex', justifyContent: 'space-evenly' }}>
        <LetterNbtn />
        <LetterMbtn />
      </div>
    </div>
  );
};

export default ExercicePage;
