import { Button } from '@/components/ui/button'
import React from 'react'
import { getAuthSession } from '@/lib/auth'

const Header = async () => {
  const session = await getAuthSession();
  return (
    <header className=' fixed top-0 bg-background w-full'>
      <div className='container flex items-center py-2 max-w-lg m-auto gap 1'>
      </div>
    </header>
  )
}

export default Header
