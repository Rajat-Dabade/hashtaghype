import hypeLogo from '../../../assets/hype-logo.png'
import tagline from '../../../assets/tagline.png'

import './aboutUs.css'

const AboutUs = () => {
  return(
    <div className="AboutUs">
      <div className="AboutUs__tagline">
        <img src={tagline} alt="Tag Line" className="AboutUs__tagline-img"/>
        <img src={hypeLogo} alt="HypeLogo" className="AboutUs__hypelogo"/>
      </div>
      <div className="AboutUs__content">
        <p>At Hashtag Hype, we believe in the power of buzz-worthy<br />
          campaigns that make hearts race and trends explode. Our <br />
          team of passionate storytellers, trendsetters, and digital<br />
          wizards knows how to harness the energy of today's fast- <br />
          paced world. We dive deep into your brand's DNA, infusing it <br />
          with our unique brand of creativity and turning it into an <br />
          unstoppable force.</p>
        <p>
          #AboutUs
        </p>
      </div>
    </div>
  )
}

export default AboutUs
