"use client"

import { signOut } from 'next-auth/react'
import React from 'react'

const LogoutButton = () => {
  return (
    <button onClick={() => {signOut()}} className="text-studysRed">Se déconnecter</button>
  )
}

export default LogoutButton
