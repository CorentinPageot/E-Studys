"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const TestEntreeBtn = () => {
  return (
    <Link href="/test_entree">
      <Button className="bg-green-500 hover:bg-green-600 text-black font-normal py-3 px-6 rounded-md border-b border-r border-green-700" style={{
        width: '20rem',
        backgroundColor: '#6fbb7b',
        position: 'relative',
        marginBottom: '15px' }}>
        <span style={{ position: 'relative', zIndex: 1 }}>Faire le test d'entrée</span>
        {/* <span style={{ position: 'absolute', right: '1.3rem', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>&rarr;</span> */}
        <Image className='absolute top-1 right-3 -translate-y-4 w-[20px] h-[20px]' src="/img/arrow2.svg" width={20} height={20} alt="arrow" />
      </Button>
    </Link>
  )
}

export default TestEntreeBtn
