import React from 'react'
import Hero from '../components/Hero/Hero'
import MapPreview from "../components/MapPreview";
import Highlights from '../components/Highlights';
import RecentReports from '../components/RecentReports';
import HowItWorks from "../components/HowItWorks";
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
        <Hero/>
        <Highlights/>
        <MapPreview/>
        <RecentReports/>
        <HowItWorks/>
        <Footer/>
      
    </div>
  )
}

export default Homepage
