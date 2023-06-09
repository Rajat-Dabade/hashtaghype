import Brands from './brands/brands'
import './client.css'

const Client = () => {
  return (
    <div className="Client">
      <h1>Our Client</h1>
      <p>Our clients spellbound and they stay with us forever,<br/> and if not, they at least keep coming back.</p>
      <Brands />
    </div>
  )
}

export default Client
