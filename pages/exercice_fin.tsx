import React, { useState } from 'react';
import '../src/css/style.css';
import TerminerBtn from '@/src/features/layout/btn/TerminerBtn';
import Menu from "../src/features/layout/Menu";
import Image from 'next/image';

const ExercicePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#b6e0f9', minHeight: '100vh', position: 'relative' }}>
      
      <Menu link1="/exercice" link2="/homepage" />

      <div style={{padding: '100px 50px 0 50px'}}>
        <div style={{ display:'flex', justifyContent: 'center', gap: '20px' }}>
            <h3 style={{fontSize: '24px', fontWeight: '700' }}>Exercice terminé !</h3>
            <Image src="/img/clapping_hands.svg" width={60} height={60} alt="Emoji mains qui applaudissent" style={{ height: 'auto' }} />
        </div>

        <p style={{ textAlign: 'center', margin: '50px 0' }}>4/5 BONNES RÉPONSES</p>
      </div>

      {/* Logo de l'application */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
        <Image src="/img/logo.png" width={100} height={200} alt="Logo E-Studys" style={{ height: 'auto' }} />
        <span style={{fontSize: '24px', fontWeight: '700' }}>BRAVO !</span>
      </div>
      
      {/* Bouton Terminer */}
      <div className="" style={{ width: '100%', position: 'absolute', bottom: '5%', textAlign: 'center' }}>
        <TerminerBtn />
      </div>
    </div>
  );
};

export default ExercicePage;
