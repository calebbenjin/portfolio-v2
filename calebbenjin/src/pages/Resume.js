import React from 'react'
import Layout from '../components/sections/Layout'
import ImgSection from '../components/sections/ImgSection'
import ContentSection from '../components/sections/ContentSection'
import Navbar from '../components/coreUI/Navbar'

const Resume = () => {
  return (
    <Layout>
      <ImgSection>
        {/* <h1>Image Section</h1> */}
      </ImgSection>
      <ContentSection>
        <Navbar />
        <h2>My Resume</h2>
      </ContentSection>
    </Layout>
  )
}

export default Resume
