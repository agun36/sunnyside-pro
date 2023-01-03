import React from 'react'
import egg from '../assets/images/desktop/image-transform.jpg'

// import apple from '../assets/images/desktop/image-photography.jpg'
import orangecup from '../assets/images/desktop/image-stand-out.jpg'
// import graphic from '../assets/images/desktop/image-graphic-design.jpg'
export const TopBanner = () => {
  return (
    <div className='wrapbanner'>
      <div className='topbanner'>
        <div className='banner-text'>
          <h4 className='topbanner-title'>
            Transform your <br className='mobile-title' /> brand
          </h4>
          <p className='topbanner-text'>
            We are a full-service creative agency specializing in helping brands
            grow fast.Engage your clients through compelling visuals that do
            most of the marketing for you
          </p>
          <button className='topbanner-btn'>Learn more</button>
        </div>
        <div className='banner-img'>
          <img src={egg} alt='' />
        </div>
      </div>
      <div className='topbanner'>
        <div className='banner-img'>
          <img src={orangecup} alt='' />
        </div>
        <div className='banner-text'>
          <h4 className='topbanner-title'>
            Stand out to the right <br className='mobile-title' /> audience
          </h4>
          <p className='topbanner-text'>
            Using a collaborative formula of designers,
            reseachers,photographer,videographer,and copywriters. We'ill build
            and extends your brand in digital place.
          </p>
          <button className='topbanner-btn-orange'>Learn more</button>
        </div>
      </div>
      <div className='topbanner banner '>
        <div className='banner-img-back'>
          <div className='banner-item'>
            <h1 className='graphic-title'>Graphic Design</h1>
            <p>
              Great design make you memorable. We deliver artwork that
              underscores you brand messgae that captures potential clients
              attention
            </p>
          </div>
        </div>
        <div className='banner-img-back-right'>
          <div className='banner-item-right'>
            <h1 className='photo-title'>Photography</h1>
            <p>
              Increase your credibility by getting the most stunning high
              quality photos that improve your businness image
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
