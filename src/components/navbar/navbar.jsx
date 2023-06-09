import brandLogo from '../../assets/brand-nav.png'
import hamburgerMenu from '../../assets/hamburger-menu.png'

import './navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <img src={brandLogo} alt="Brand Logo" />
      </div>
      <div>
        <img src={hamburgerMenu} alt="HamBurger Menu"/>
      </div>
    </div>
  )
}

export default Navbar
