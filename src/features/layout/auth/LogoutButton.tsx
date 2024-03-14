"use client"

import { Button } from '@/components/ui/button'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import React from 'react'

const DropdownMenuItemLogout = () => {
  return (
    <DropdownMenuItem onClick={() => {
      signOut()
    }}>
      <LogOut className='mr-2 h-4 w-4' />
      Déconnexion
    </DropdownMenuItem>
  )
}

export default DropdownMenuItemLogout
