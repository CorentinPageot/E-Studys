"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link';

const ParfoisBtn = () => {
  return (
    <Link href="/test_entree_fin">
      <Button className="bg-green-500 hover:bg-green-600 text-black font-normal py-3 px-6 rounded-md border-b border-r border-gray-400" style={{
        position: 'relative',
        width: '20rem',
        backgroundColor: '#FEEA0A',
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
      }}>
        <span>Parfois</span>
        <span style={{ position: 'absolute', right: '1.3rem', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>&rarr;</span>
      </Button>
    </Link>
  )
}

export default ParfoisBtn

