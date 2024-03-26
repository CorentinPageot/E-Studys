import React from 'react'
import { getAuthSession } from "@/lib/auth";
import UserProfile from '../../src/features/layout/auth/UserProfile'
import LoginButton from "../../src/features/layout/auth/LoginButton";

export default async function Profile() {
  const session = await getAuthSession();
  return (
    <div>
    {session?.user ? (
      <UserProfile />
      ) : (
      <LoginButton />
    )}
    </div>
  )
}
