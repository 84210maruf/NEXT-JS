import React from 'react'
import prisma from '../../lib/prisma'
import ColorBtns from '../../componants/colorBtn'
export default async function page() {
    const data = await prisma.test.findMany()
  return (
    <div>
      {data?.map((data)=>(
        // <colorBtn key={data.id} color={data.color} />
        <colorBtns key={data.id} />
      ))}
    </div>
  )
}
