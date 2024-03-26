import React, { useState } from 'react';
import '../src/css/style.css';
import Image from 'next/image';
import Link from 'next/link';
import ContinuerBtn from '@/src/features/layout/btn/ContinuerBtn';
import ContactBtn from '@/src/features/layout/btn/ContactBtn';
import Menu from "../src/features/layout/Menu";

const QuestionnaireFinPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#b6e0f9', minHeight: '100vh', position: 'relative' }}>
      
      <Menu link1="/test_entree" link2="/" />

      <div style={{padding: '100px 50px 0 50px', textAlign: 'center'}}>
        <h3 style={{fontSize: '24px', fontWeight: '700'}}>🎉 Résultats 🎉</h3>
      </div>

      {/* if nb bonnes réponses entre 7 et 9 alors */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '30px', marginTop: '50px' }}>
        <Image src="/img/apple_results.svg" width={180} height={240} alt="Image d'un bonhomme pomme" style={{ height: 'auto' }} />
        <span style={{fontSize: '17px', fontWeight: '700'}}>Aucun trouble détecté</span>
        <p style={{ textAlign: 'center', padding: '0 50px' }}>D'après le test effectué, tu ne sembles pas avoir de trouble dys. En tout cas, nous n'avons rien détecté. <br/><br/> Il est préférable de se référer à un avis professionnel pour une analyse plus précise.</p>
      </div>
      {/* elseif nb bonnes réponses entre 4 et 6 alors */}
      {/*<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '30px', marginTop: '50px' }}>
        <Image src="/img/orange_results.svg" width={180} height={240} alt="Image d'un bonhomme orange" style={{ height: 'auto' }} />
        <span style={{fontSize: '17px', fontWeight: '700'}}>Troubles dys possible</span>
        <p style={{ textAlign: 'center', padding: '0 50px' }}>D'après le test effectué, il est indiqué que vous pourriez avoir des troubles dys. <br/><br/> Il est préférable de se référer à un avis professionnel pour une analyse plus précise.</p>
      </div>*/}
      {/* elseif nb bonnes réponses entre 0 et 4 alors */}
      {/*<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '30px', marginTop: '50px' }}>
        <Image src="/img/peer_results.svg" width={180} height={220} alt="Image d'un bonhomme poire" />
        <span style={{fontSize: '17px', fontWeight: '700'}}>Troubles dys détecté</span>
        <p style={{ textAlign: 'center', padding: '0 50px', marginBottom: '30px' }}>D'après le test effectué, vos difficultés correspondent à de nombreux traits des troubles dys. <br/><br/> Il est préférable de se référer à un avis professionnel pour une analyse plus précise.</p>
      </div>
      <div className="" style={{ width: '100%', position: 'absolute', textAlign: 'center' }}>
        <ContactBtn />
      </div>*/}
      
      {/* Bouton Terminer */}
      <div className="" style={{ width: '100%', position: 'absolute', bottom: '5%', textAlign: 'center' }}>
        <ContinuerBtn href="/" />
      </div>

    </div>
  );
};

export default QuestionnaireFinPage;
