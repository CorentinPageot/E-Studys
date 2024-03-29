"use client"

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import React from 'react'

const LoginButton = () => {
  return (
    <Button className="bg-blue-200 hover:bg-blue-300 text-black font-normal py-3 px-6 rounded-md mt-5 border-b border-r border-gray-400" 
    onClick={() => {
      signIn()
    }} style={{ width: '20rem', backgroundColor: '#b6e0f9', fontFamily: 'font_estudys', position: 'relative' }}>
      <span>J'ai déjà un compte</span>
      <span style={{ position: 'absolute', right: '1.3rem', top: '50%', transform: 'translateY(-50%)' }}>&rarr;</span>
    </Button>
  )
}

export default LoginButton
