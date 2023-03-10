import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from'./HeaderSocials.jsx'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Agrima</h1>
        <CTA/>
        <HeaderSocials/>

        <div >
          <img className="me" src={ME} alt=""/>
        </div>

        <a href="#contact" className="scroll__down"> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
