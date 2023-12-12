"use client"

import { Button } from '@/components/ui/button'

import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import React from 'react'

const LogoutButton = () => {
  return (
    <Button onClick={() => {
      signOut()
    }}>
      <LogOut className='mr-2 h-4 w-4' />
      Logout
    </Button>
  )
}

export default LogoutButton
