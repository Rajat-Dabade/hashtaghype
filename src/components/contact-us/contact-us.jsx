import PropTypes from 'prop-types'

import Footer from '../footer/footer'

import LogoOrange from '../../assets/logo-orange.png'
import ContactUsImg from '../../assets/contact-us.png'

import './contact-us.css'
import { useEffect } from 'react'


const cards = [
  {
    main: 'Website',
    sub: 'Development'
  },
  {
    main: 'Emain',
    sub: 'Marketing'
  },
  {
    main: 'Social Media',
    sub: 'Marketing'
  },
  {
    main: 'Search Engine',
    sub: 'Optimisation'
  },
  {
    main: 'Mobile',
    sub: 'Application'
  },
  {
    main: 'Search Engine',
    sub: 'Marketing'
  },
  {
    main: 'Brand Strategy',
    sub: '& Identity'
  },
  {
    main: 'Music',
    sub: 'Distribution'
  },
  {
    main: 'Artist',
    sub: 'PR'
  },
  {
    main: 'Content',
    sub: 'Writing'
  },
  {
    main: 'Whatsapp',
    sub: 'Marketing'
  },
  {
    main: 'Event',
    sub: 'Promotions'
  }
]

const ContactUs = (props) => {

  useEffect(() => {
    props.setNavbar(2)
  }, [props])

  return (
    <div className="ContactUs">
      <div className="ContactUs__head">
        <p>Contact</p>
        <img src={LogoOrange} alt="Orange Logo"/>
      </div>
      <div className="ContactUs__content">
        <div className="ContactUs__info">
          <p>Ready to hype your brand?</p>
          <p>Please fill out the form to request a quote for a<br />
            project, inquire about a collaboration, or simply<br />
            say hello 👋.</p>
          <img src={ContactUsImg} alt="ContactUs" />
          <p>For career enquiries, mail us at ✉️<br />
            Careers@hashtaghype.in
          </p>
        </div>
        <div className="ContactUs__form">
          <div className="ContactUs__form-input">
            <label>Name</label>
            <input type="text" placeholder="Name"/>
          </div>
          <div className="ContactUs__form-input">
            <label>Email</label>
            <input type="text" placeholder="Email"/>
          </div>
          <div className="ContactUs__form-phone">
            <label>Phone</label>
            <div className="ContactUs__form-phone_content">
              <select>
                <option value="option1">IN</option>
                <option value="option2">US</option>
                <option value="option3">CA</option>
              </select>
              <input type="text" placeholder="Phone" />
            </div>
          </div>
          <div className="ContactUs__form-input">
            <label>Subject</label>
            <input type="text" placeholder="Subject"/>
          </div>
          <div className="ContactUs__cards">
            <div className="ContactUs__card-row">
              {cards.map((item, index) => {
                return (
                  <div key={index} className="ContactUs__card-item">
                    <p>{item.main}</p>
                    <p>{item.sub}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="ContactUs__form-input">
            <select>
              <option value="Budget">Budget</option>
              <option value="0 - 50,000">0 - 50,000</option>
              <option value="50,000 - 1,00,000" >50,000 - 1,00,000</option>
            </select>
          </div>
          <div className="ContactUs__form-btn">
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="ContactUs__footer">
        <Footer />
      </div>
    </div>
  )
}

ContactUs.propTypes = {
  setNavbar: PropTypes.func.isRequired
}

export default ContactUs
