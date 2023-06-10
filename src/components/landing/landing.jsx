import { useEffect } from 'react'
import PropTypes from 'prop-types'
import AboutUs from './about-us/aboutUs'
import OurService from './our-services/ourService'
import HeroCard from '../../elements/hero-card/HeroCard'
import Client from './client/client'
import Footer from '../footer/footer'

import {HeroCardData} from '../../data/HeroCardData'

import arrowIcon from '../../assets/arrow.png'
import instagramIcon from '../../assets/instagram.png'
import facebookIcon from '../../assets/facebook.png'

import './Landing.css'

const Landing = (props) => {

  useEffect(() => {
    props.setNavbar(1)
  }, [props])

  return (
    <div className="Landing__main">
      <div className="Landing">
        <div className="Landing__content">
          <div className="Landing__content-heading">
            <p>Buzz-worthy<br/> campaigns</p>
            <div className="Landing__subcontent">
              <p>That make hearts race &<br/> trends explode.</p>
              <img src={arrowIcon} alt="Arrow"/>
            </div>
          </div>
          <div className="Landing__content-cards">
            {HeroCardData.map((item, index) => {
              return <HeroCard
              key={index}
              title={item.title}
              count={item.count}/>
            })}
          </div>
          <div className="Landing__social">
            <a href="#"><img src={instagramIcon} alt="Instagram"/></a>
            <a href="#"><img src={facebookIcon} alt="Facebook"/></a>
          </div>
        </div>
      </div>
      <AboutUs />
      <OurService />
      <Client />
      <Footer />
    </div>
  )
}

Landing.propTypes = {
  setNavbar: PropTypes.func.isRequired
}

export default Landing
