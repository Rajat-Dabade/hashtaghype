import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import brandLogo from '../../assets/brand-nav-dark.png'
import Cross from '../../assets/cross.png'
import CrossHover from '../../assets/cross-hover.png'

import './navbar.css'

const NavbarDialog = (props) => {

  const [imgCrossSrc, setImgCrossSrc] = useState(Cross)
  const navigate = useNavigate()

  const handleMouseOverEvent = () => {
    setImgCrossSrc(CrossHover)
  }

  const handleMouseOutEvent = () => {
    setImgCrossSrc(Cross)
  }

  const navbarMenuOpenHandler = () => {
    props.setOpen(!open)
  }


  const handleRoute = (route) => {
    props.setOpen(false)
    navigate(route)
  }

  return (
    <div className="Navbar__menu">

      <div className="Navbar__nav">
        <div>
          <img src={brandLogo} alt="Brand Logo" />
        </div>
        <div>
          <img
            src={imgCrossSrc}
            alt="HamBurger Menu"
            onClick={navbarMenuOpenHandler}
            onMouseOver={handleMouseOverEvent}
            onMouseOut={handleMouseOutEvent}
          />
        </div>
      </div>

      <div className="Navbar__menu-list">
        <div className="Navbar__menu-item">Services</div>
        <div className="Navbar__menu-item">
          Client
        </div>
        <div className="Navbar__menu-item" onClick={() => handleRoute('/contact')}>Contact us</div>
        <div className="Navbar__menu-item">Blog</div>
        <div className="Navbar__menu-item">Media</div>
        <div className="Navbar__menu-item">Portfolio</div>
      </div>

    </div>
  )
}

NavbarDialog.propTypes = {
  setOpen: PropTypes.func.isRequired
}


export default NavbarDialog
