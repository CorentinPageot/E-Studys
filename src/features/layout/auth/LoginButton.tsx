"use client"

import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
import { signIn } from 'next-auth/react'
import React from 'react'

const LoginButton = () => {
  return (
    <Button onClick={() => {
      signIn()
    }}>
      <LogIn className='mr-2 h-4 w-4' />
      Login
    </Button>
  )
}

export default LoginButton
