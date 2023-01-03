import React from 'react'
import milk from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import orangeslice from '../assets/images/desktop/image-gallery-orange.jpg'
import cone from '../assets/images/desktop/image-gallery-cone.jpg'
import sugar from '../assets/images/desktop/image-gallery-sugarcubes.jpg'
export const Beverages = () => {
  return (
    <blockquote className='blockquote '>
      <img src={milk} alt='' className='blockimg' />
      <img src={orangeslice} alt='' className='blockimg' />
      <img src={cone} alt='' className='blockimg' />
      <img src={sugar} alt='' className='blockimg' />
    </blockquote>
  )
}
