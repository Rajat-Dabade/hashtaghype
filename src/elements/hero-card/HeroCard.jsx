import PropTypes from 'prop-types'

import './HeroCard.css'

const HeroCard = (props) => {

  return (
    <div className="HeroCard">
      <p className="HeroCard__title">{props.title}</p>
      <p className="HeroCard__count">
        {props.count}
        <span className="HeroCard__count-plus">+</span>
      </p>
    </div>
  )
}

HeroCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default HeroCard
