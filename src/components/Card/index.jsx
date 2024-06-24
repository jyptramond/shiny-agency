import PropTypes from 'prop-types'

function Card({ label, name, title, picture }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt="freelance" height={80} width={80} />
      <span>{name}</span>
      <span>{title}</span>
    </div>
  )
}

Card.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string
}

export default Card
