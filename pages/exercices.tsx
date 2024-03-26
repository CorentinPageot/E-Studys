import React, { useState } from 'react';
import '../src/css/style.css';
import Footer from "@/src/features/layout/Footer";

const ExercicesPage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      
        <div style={{ backgroundColor: '#b6e0f9', paddingLeft: '20px', padding: '50px 0 20px 20px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '24px', marginTop: '0', marginBottom: '0' }}>Exercices</h2>
        </div>
        <div style={{ display: 'flex', flexWrap:'wrap', justifyContent: 'space-between', gap: '10px', padding: '0 20px' }}>
            {/* Boucle pour afficher les 2 premiers exos */}
            <div className='exercice' style={{ borderRadius: '10px', padding: '10px', paddingLeft: '30px', textAlign: 'left', width: '35%', position: 'relative', backgroundImage: 'url("/img/strawberry.svg")', backgroundPosition: 'bottom left', backgroundRepeat: 'no-repeat' }}>
                <a href='/exercice' style={{ textDecoration: 'none', position: 'relative', zIndex: '1' }}>
                    <h4 style={{ color: 'black' }}>Nom exo</h4>
                    <p style={{ color: '#5C5C5C' }}>Description courte exo</p>
                </a>
            </div>
            <div className='exercice' style={{ borderRadius: '10px', padding: '10px', paddingLeft: '30px', textAlign: 'left', width: '35%', position: 'relative', backgroundImage: 'url("/img/cherry.svg")', backgroundPosition: 'bottom left', backgroundRepeat: 'no-repeat' }}>
                <a href='/exercice' style={{ textDecoration: 'none', position: 'relative', zIndex: '1' }}>
                    <h4 style={{ color: 'black' }}>Nom exo</h4>
                    <p style={{ color: '#5C5C5C' }}>Description courte exo</p>
                </a>
            </div>
            {/* Fin boucle */}
        </div>

        <p style={{textAlign: 'center', color: '#5C5C5C', marginTop: '50px' }}>Psssstt ! Des exercices arrivent bientôt !</p>

      <Footer />
    </div>
  );
};

export default ExercicesPage;
