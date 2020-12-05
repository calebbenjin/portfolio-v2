import React from 'react'
import Layout from '../components/sections/Layout'
import ImgSection from '../components/sections/ImgSection'
import ContentSection from '../components/sections/ContentSection'
import Navbar from '../components/coreUI/Navbar'
import About from '../components/sections/AboutSection'
import {AboutContext} from '../context/context'

const Home = () => {
  console.log(React.useContext(AboutContext))
  return (
    <Layout>
      <ImgSection>
        {/* <h1>Image Section</h1> */}
      </ImgSection>
      <ContentSection>
        <Navbar />
        <About />
      </ContentSection>
    </Layout>
  )
}

export default  Home;
