import React from 'react'
import Navbar from '../../components/Navbar'
import MotherNature from '../../components/MotherNature'
import BrandStory from '../../components/BrandStory/BrandStory'
import Fabric from '../../components/Fabric/Fabric'
import AboutHead from '../../components/about/AboutHead'
import Tantukosh from '../../components/Tantukosh/Tantukosh'
import Footer from '../../components/Footer/Footer'
import LearnMore from '../../components/Learnmore/LearnMore'
import Values from '../../components/Values/Values'
import Whyhemp from '../../components/WhyHemp/Whyhemp'
import Pillars from '../../components/Pillars/Pillars'
import GreenReason from '../../components/GreenReason/GreenReason'
import GreenThreads from '../../components/GreenThreads'

const Home = () => {
  return (
    <>
        <AboutHead/> 
        
         <MotherNature/>
       
         <LearnMore/>
       
        <Whyhemp/>
        <GreenThreads/>
        <Footer/>
       
    </>
  )
}

export default Home
