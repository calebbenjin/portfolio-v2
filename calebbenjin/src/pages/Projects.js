import React from 'react'
import Layout from '../components/sections/Layout'
import ImgSection from '../components/sections/ImgSection'
import ContentSection from '../components/sections/ContentSection'
import Navbar from '../components/coreUI/Navbar'

const Projects = () => {
  return (
    <Layout>
      <ImgSection>
        {/* <h1>Image Section</h1> */}
      </ImgSection>
      <ContentSection>
        <Navbar />
        <h1>Hello from Projects Page</h1>
      </ContentSection>
    </Layout>
  )
}

export default Projects
