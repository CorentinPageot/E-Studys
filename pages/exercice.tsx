import React, { useState } from 'react';
import '../src/css/style.css';
import ExerciceBtn from "../src/features/layout/btn/ExerciceBtn";
import Menu from "../src/features/layout/Menu";
import Image from 'next/image';

const ExercicePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#b6e0f9', minHeight: '100vh', position: 'relative' }}>
      
      <Menu link1="/homepage" link2="/homepage" />

      <div style={{padding: '100px 50px 0 50px'}}>
        <div style={{ backgroundColor: '#6fbb7b', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
            <h4 className="bg-red-500">Description longue exo</h4>
        </div>

        <p style={{ margin: '50px 0' }}>
            Tu vas avoir une succession de plusieurs animaux et pour chacun d'entre eux, tu devras choisir s'il s'écrit avec la lettre “n” ou la lettre "m". <br/><br/> Par exemple, moi c'est Citron. Mon nom s'écrit alors avec la lettre "n".
        </p>
      </div>

      {/* Logo de l'application */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
        <Image src="/img/logo.png" width={100} height={200} alt="Logo E-Studys" style={{ height: 'auto' }} />
        <span style={{fontSize: '24px', fontWeight: '700' }}>PRET ?!</span>
      </div>
      
      {/* Bouton Continuer */}
      <div className="" style={{ width: '100%', position: 'absolute', bottom: '5%', textAlign: 'center' }}>
        <ExerciceBtn />
      </div>
    </div>
  );
};

export default ExercicePage;
