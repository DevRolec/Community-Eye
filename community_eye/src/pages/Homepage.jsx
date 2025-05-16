import React from 'react'
import Hero from '../components/Hero/Hero'
import MapPreview from "../components/MapPreview";
import Highlights from '../components/Highlights';

const Homepage = () => {
  return (
    <div>
        <Hero/>
        <Highlights/>
        <MapPreview/>
      
    </div>
  )
}

export default Homepage
