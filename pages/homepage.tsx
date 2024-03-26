
import React, { useState } from 'react';
import '../src/css/style.css';
import Footer from "@/src/features/layout/Footer";
import Image from 'next/image'

const HomePage: React.FC = () => {
    const [showMoreExercises, setShowMoreExercises] = useState(false);

    const handleShowMoreExercises = () => {
        setShowMoreExercises(!showMoreExercises);
    };

    return (
        <div style={{ backgroundColor: '#fff', minHeight: '100vh', position: 'relative', padding: '35px 20px 0 20px' }}>

            <h2>Reprendre le dernier exercice</h2>
            <div style={{ backgroundColor: '#6fbb7b', borderRadius: '10px', padding: '10px', paddingLeft: '80px', textAlign: 'left', width: 'auto', position: 'relative', backgroundImage: 'url("/img/apple.svg")', backgroundPosition: 'bottom left', backgroundRepeat: 'no-repeat', fontSize: '18px' }}>
                <a href='/exercices' style={{ textDecoration: 'none', position: 'relative', zIndex: '1', color: 'black' }}>
                    <h4>Nom exo</h4>
                    <p>Description courte exo</p>
                </a>
                <Image src="/img/arrow.svg" width={50} height={60} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }} alt="Flèche" />
            </div>

            <h2>Mes exercices</h2>
            <div style={{ display: 'flex', flexWrap:'wrap', justifyContent: 'space-between', gap: '10px' }}>
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

                {/* Afficher plus de div si showMoreExercises est vrai */}
                {showMoreExercises && (
                    <>
                        <div className='exercice' style={{ borderRadius: '10px', padding: '10px', paddingLeft: '30px', textAlign: 'left', width: '35%', position: 'relative', backgroundImage: 'url("/img/orange.svg")', backgroundPosition: 'bottom left', backgroundRepeat: 'no-repeat' }}>
                            <a href='/exercice' style={{ textDecoration: 'none', position: 'relative', zIndex: '1' }}>
                                <h4 style={{ color: 'black' }}>Nom exo</h4>
                                <p style={{ color: '#5C5C5C' }}>Description courte exo</p>
                            </a>
                        </div>
                        <div className='exercice' style={{ borderRadius: '10px', padding: '10px', paddingLeft: '30px', textAlign: 'left', width: '35%', position: 'relative', backgroundImage: 'url("/img/peer.svg")', backgroundPosition: 'bottom left', backgroundRepeat: 'no-repeat' }}>
                            <a href='/exercice' style={{ textDecoration: 'none', position: 'relative', zIndex: '1' }}>
                                <h4 style={{ color: 'black' }}>Nom exo</h4>
                                <p style={{ color: '#5C5C5C' }}>Description courte exo</p>
                            </a>
                        </div>
                    </>
                )}
            </div>
            <div  style={{ textAlign: 'right', marginTop: '20px' }}>
                <a href="#" onClick={handleShowMoreExercises} style={{ textDecoration: 'underline', color: 'black' }}>
                    {showMoreExercises ? 'Voir moins' : 'Voir plus'}
                </a>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
