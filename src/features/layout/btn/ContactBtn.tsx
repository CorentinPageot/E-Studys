import React from 'react';
import { Button } from '@/components/ui/button';

const ContactBtn = () => {
  {/* Ouverture d'une autre page google maps, avec le terme orthophoniste en recherche */}
  const handleOpenGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/orthophoniste', '_blank');
  };

  return (
    <Button
      className="text-black font-normal py-3 px-6 rounded-md border-b border-r border-gray-400"
      style={{
        backgroundColor: '#EE7B31',
        position: 'relative',
        width: '20rem',
        color: 'black',
        fontWeight: 'normal',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.375rem',
        border: 'none',
        borderBottom: '1px solid #47794f',
        borderRight: '1px solid #47794f',
        height: '2.25rem',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '14px',
        fontFamily: 'font_estudys',
        textDecoration: 'none',
        marginRight: 'auto'
      }}
      onClick={handleOpenGoogleMaps}
    >
      <span>Contacter un professionnel</span>
      <span style={{ position: 'absolute', right: '1.3rem', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>&rarr;</span>
    </Button>
  );
};

export default ContactBtn;
