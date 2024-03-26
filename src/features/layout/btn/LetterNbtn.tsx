"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link';

const LetterNbtn = () => {
  return (
    <Link href="/exercice_fin">
      <Button className="text-black font-normal py-3 px-6 rounded-md border-b border-r border-gray-400" style={{
        position: 'relative',
        width: '9rem',
        backgroundColor: '#EE7B31',
        color: 'black',
        fontWeight: 'normal',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.375rem',
        border: 'none',
        borderBottom: '1px solid #47794f',
        borderRight: '1px solid #47794f',
        height: '7rem',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '14px',
        fontFamily: 'font_estudys',
        textDecoration: 'none',
        marginRight: 'auto'
      }}>
        <span>Cet animal contient la lettre <span style={{fontSize: '18px'}}>n</span></span>
      </Button>
    </Link>
  )
}

export default LetterNbtn

