import React from 'react'
import emily from '../assets/images/desktop/image-emily.jpg'
import thomas from '../assets/images/desktop/image-thomas.jpg'
import jenny from '../assets/images/desktop/image-jennie.jpg'
export const Testimony = () => {
  return (
    <div className='wrapperstest '>
      <h1 className='wrapper-subtitle'>Clients testimonials</h1>
      <div className='wrapper_client'>
        <div className='testimonywrapper'>
          <img src={emily} alt='' />
          <p className='testimony-text'>
            We put our trust in sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit
          </p>
          <div className='testimony-title'>
            <h4>Emilry R</h4>
            <small>Marketing Director</small>
          </div>
        </div>
        <div className='testimonywrapper'>
          <img src={thomas} alt='' />
          <p className='testimony-text'>
            Sunnyside's enthusiasm couple with their keen insterest in our brand
            success made it a satisfying and enjoyable experience
          </p>
          <div className='testimony-title'>
            <h4>Thomas S</h4>
            <small>Marketing Director</small>
          </div>
        </div>
        <div className='testimonywrapper'>
          <img src={jenny} alt='' />
          <p className='testimony-text'>
            Incredible end result our sales increased over 400% when we worked
            with sunnyside. <br /> Highly recommended!
          </p>
          <div className='testimony-title'>
            <h4>Jenny F</h4>
            <small>Marketing Director</small>
          </div>
        </div>
      </div>
    </div>
  )
}
