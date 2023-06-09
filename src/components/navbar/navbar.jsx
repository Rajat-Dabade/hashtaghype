import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import brandLogo from '../../assets/brand-nav.png'
import HamburgerMenu from '../../assets/hamburger-menu.png'
import HamBurgerMenuHover from '../../assets/hamburger-menu-hover.png'

import './navbar.css'
import NavbarDialog from './navbar-dialog'

const Navbar = () => {

  const [open, setOpen] = useState(false)
  const [imgHamBurgerSrc, setImgHamBurgerSrc] = useState(HamburgerMenu)
  const navigate = useNavigate()

  const navbarMenuOpenHandler = () => {
    setOpen(!open)
  }

  const handleMouseOverEvent = () => {
    setImgHamBurgerSrc(HamBurgerMenuHover)
  }

  const handleMouseOutEvent = () => {
    setImgHamBurgerSrc(HamburgerMenu)
  }

  const navigateToHomePage = () => {
    navigate('/')
  }

  return (
    <div className="Navbar">
      {!open &&
       <div className="Navbar__nav">
         <div onClick={navigateToHomePage}>
           <img src={brandLogo} alt="Brand Logo" />
         </div>
         <div>
           <img
             src={imgHamBurgerSrc}
             alt="HamBurger Menu"
             onClick={navbarMenuOpenHandler}
             onMouseOver={handleMouseOverEvent}
             onMouseOut={handleMouseOutEvent}
           />
         </div>
       </div> }
      {open && (
        <NavbarDialog setOpen={setOpen}/>
      )}
    </div>
  )
}

export default Navbar
