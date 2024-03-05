"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link';

const LoginButton = () => {
  return (
    <Link href="/test_entree">
      <Button className="bg-green-500 hover:bg-green-600 text-black font-normal py-3 px-6 rounded-md border-b border-r border-green-700" style={{ width: '20rem', backgroundColor: '#6fbb7b', fontFamily: 'font_estudys' }}>
        <span className="mr-2">Faire le test d'entrée</span>
        <span>&rarr;</span>
      </Button>
    </Link>
  )
}

export default LoginButton
