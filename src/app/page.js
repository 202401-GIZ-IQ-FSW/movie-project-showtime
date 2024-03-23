import NavBar from '@/components/navbar/NavBar'
import React from 'react'

import Link from 'next/link';

export default function Home() {
  return (
    <div>
    <Link href='movies'> movies </Link>
<NavBar/>
    </div>
  )
}
