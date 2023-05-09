import React, { PropsWithChildren } from 'react'
import Navbar from '../Navbar/Navbar'

const Layout: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <main className='w-full bg-slate-50'>
      <Navbar />
      <div className='relative'>{children}</div>
    </main>
  )
}

export default Layout