import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarDialog from './navbar-dialog'

import brandLogo from '../../assets/brand-nav-dark.png'
import HamBurgerMenu from '../../assets/hamburger-menu.png'
import HamBurgerMenuHover from '../../assets/hamburger-menu-hover.png'
import Cross from '../../assets/cross.png'
import CrossHover from '../../assets/cross-hover.png'

import './navbar.css'

const NavbarDark = () => {

  const [open, setOpen] = useState(false)
  const [imgCrossSrc, setImgCrossSrc] = useState(Cross)
  const [imgHamBurgerSrc, setImgHamBurgerSrc] = useState(HamBurgerMenuHover)
  const navigate = useNavigate()


  const navbarMenuOpenHandler = () => {
    console.log("Clicked")
    setOpen(!open)
  }

  const handleMouseOverEvent = () => {
    setImgCrossSrc(CrossHover)
    setImgHamBurgerSrc(HamBurgerMenu)
  }

  const handleMouseOutEvent = () => {
    setImgCrossSrc(Cross)
    setImgHamBurgerSrc(HamBurgerMenuHover)
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

export default NavbarDark
