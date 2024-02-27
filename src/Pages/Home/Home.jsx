import React from 'react'
import Navbar from '../../components/Navbar'
import MotherNature from '../../components/MotherNature'
import BrandStory from '../../components/BrandStory/BrandStory'
import Fabric from '../../components/Fabric/Fabric'
import AboutHead from '../../components/about/AboutHead'
import Tantukosh from '../../components/Tantukosh/Tantukosh'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
        {/* <Navbar/> */}
        <MotherNature/>
        <BrandStory/>
        <AboutHead/>
        <Tantukosh/>
        <Fabric/>
        <Footer/>
    </>
  )
}

export default Home
