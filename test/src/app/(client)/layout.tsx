import Navbar from '@/components/Navbar'
import React from 'react'

const ClientLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <Navbar/>
      <div className='mt-24'>
        {children}
      </div>
    </div>
  )
}

export default ClientLayout
