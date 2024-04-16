"use client"

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

const LoginButton = () => {
  return (
    <Button className="bg-blue-200 hover:bg-blue-300 text-black font-normal py-3 px-6 rounded-md mt-5 border-b border-r border-gray-400" 
    onClick={() => {
      signIn()
    }} style={{ width: '20rem', backgroundColor: '#b6e0f9', position: 'relative' }}>
      <span>J'ai déjà un compte</span>
      <Image className='absolute top-1 right-3 -translate-y-4 w-[20px] h-[20px]' src="/img/arrow2.svg" width={20} height={20} alt="arrow" />
    </Button>
  )
}

export default LoginButton
