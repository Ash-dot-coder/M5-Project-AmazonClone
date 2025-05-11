import React from 'react'
import './HomeScreen.css'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeDetails from './HomeDetails/HomeDetails'
import Footer from '../../Component/Footer/Footer'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <HomeBanner />
      <HomeDetails />
      <Footer />
    </div>
  )
}

export default HomeScreen