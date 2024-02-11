"use client"

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import React from 'react'
import Link from 'next/link';

const ContinuerBtn = () => {
  return (
    <Link href="/test_entree">
      <Button className="bg-green-500 hover:bg-green-600 text-black font-normal py-3 px-6 rounded-md border-b border-r border-gray-400" style={{
        width: '20rem',
        backgroundColor: '#6fbb7b',
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
        alignItems: 'center'
      }}>
        <span style={{ marginRight: '0.5rem' }}>Continuer</span>
        <span style={{ width: '15px', height: '20px', fontSize: '15px' }}>&rarr;</span>
      </Button>
    </Link>
  )
}

export default ContinuerBtn
