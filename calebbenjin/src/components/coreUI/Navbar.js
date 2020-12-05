import React from 'react'
import Links from './Links'
import Toggle from './ToggleIcon'

const Navbar = () => {
  return (
    <nav>
      <div className="navlist">
        <Links styleClass="navLink" />
      </div>
      <Toggle />
    </nav>
  )
}


export default Navbar
