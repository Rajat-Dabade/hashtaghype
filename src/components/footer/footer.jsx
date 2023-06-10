import Call from '../../assets/call.png'
import Email from '../../assets/email.png'
import FooterLogo from '../../assets/footer-logo.png'
import Insta from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import LinkedIn from '../../assets/linkedin.png'
import ArrowBtn from '../../assets/arrowbtn.png'


import './footer.css'

const Footer = () => {
  return (
    <div className="Footer">

      <div className="Footer__subsection">
        <div className="Footer__contact">
          <div>
            <div className="Footer__contact-info">
              <img src={Call} alt="Call" />
              <p>+91 589 621 1548</p>
            </div>
            <div className="Footer__contact-info">
              <img src={Email} alt="Email" />
              <p>info@hashtaghype.in</p>
            </div>
          </div>
        </div>
        <div className="Footer__social">
          <div className="Footer__social-logo">
            <img src={FooterLogo} alt="Logo"/>
          </div>
          <div className="Footer__social-icon">
            <img src={Insta} alt="" />
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={LinkedIn} alt="" />
          </div>
        </div>
        <div className="Footer__contact-btn">
          <button>Contact Us <img src={ArrowBtn} alt="Arrow" /></button>
        </div>
      </div>

      <div className="Footer__main">
        <div className="Footer__main-link">
          <div className="Footer__main-link_page">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Client</a>
            <a href="#">Contact us</a>
          </div>
        </div>

        <div className="Footer__main-link">
          <div className="Footer__main-link_page">
            <a href="#">Blog</a>
            <a href="#">Media</a>
            <a href="#">Portfolio</a>
          </div>
        </div>

        <div className="Footer__main-form">
          <div className="Footer__main-form_content">
            <input type="text" placeholder="Email Address"/>
            <button>Sign up to our newsletter</button>
            <div className="Footer__main-form-checkbox">
              <input type="checkbox"/>
              <span>I’m okay with getting emails and having that<br /> activity tracked to improve my experience.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer__copywrite">
        <hr/>
        <p>©2023 hashtag Hype. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer
