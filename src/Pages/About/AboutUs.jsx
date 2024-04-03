import React from 'react'
import './AboutUs.css'
import Navbar from '../../components/Navbar'
import Fabric from '../../components/Fabric/Fabric'
import BrandStory from '../../components/BrandStory/BrandStory'
import Tantukosh from '../../components/Tantukosh/Tantukosh'
import Values from '../../components/Values/Values'
import Pillars from '../../components/Pillars/Pillars'
import GreenReason from '../../components/GreenReason/GreenReason'
import Footer from '../../components/Footer/Footer'

const AboutUs = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Fabric/>
    <BrandStory/>
    <Tantukosh/>
    <Values/>
    <Pillars/>
    <GreenReason/>
    <Footer/>
    </>
  )
}

export default AboutUs
