import React from 'react'
import { HomeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 flex items-center justify-between w-full h-16 p-5 bg-slate-100'>
      <Link href={'/'}><HomeIcon role='button' className='w-10 h-10 transition hover:text-fuchsia-400' /></Link>
      <nav className='flex gap-10'>
        <Link href={'/'}>Home</Link>
        <Link href={'charts'}>Charts</Link>
        <Link href={'about'}>About</Link>
      </nav>
      <Link href={'/'}>
        <Image
          className='w-10 h-10 rounded-full'
          alt='doge'
          width={40}
          height={40}
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_YNKJeyNdwciiL9IVvgESSPuG5eM4mEo-g&usqp=CAU' />
      </Link>
    </div>
  )
}

export default Navbar