import React from 'react'
import LogoImg from '../../asset/logo.png'

const ImgSection = ({children}) => {
  return (
    <section className="img-section">
      <div className="logo-section">
        <img src={LogoImg} alt="logo" className="logo" />
        {children}
      </div>
    </section>
  )
}

export default ImgSection
