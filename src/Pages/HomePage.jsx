import React from 'react'
import { Beverages } from '../components/Beverages'
import { Footer } from '../components/Footer'

import { Navbar } from '../components/Navbar'
import { Testimony } from '../components/Testimony'
import { TopBanner } from '../components/TopBanner'

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <TopBanner />
      <Testimony />
      <Beverages />
      <Footer />
    </>
  )
}
