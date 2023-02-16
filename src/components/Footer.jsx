import React from 'react'
import Logo from '../img/logo.png'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>Made with &#10084;&#65039; and <b>React.js</b>.</span>
    </footer>
  )
}

export default Footer