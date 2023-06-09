import Mercedes from '../../../../assets/mercedes.png'
import Lenovo from '../../../../assets/lenovo.png'
import Amazon from '../../../../assets/amazon.png'
import Swiggy from '../../../../assets/swiggy.png'
import Mahindra from '../../../../assets/mahindra.png'
import Pwc from '../../../../assets/pwc.png'
import Unicef from '../../../../assets/unicef.png'
import Shangri from '../../../../assets/shangri.png'
import Vistara from '../../../../assets/vistara.png'
import Airbus from '../../../../assets/airbus.png'

import './brands.css'

const Brands = () => {
  return (
    <div className="Brands">
      <div className="Brands__images">
        <img src={Mercedes} alt="brands"/>
        <img src={Lenovo} alt="brands"/>
        <img src={Amazon} alt="brands"/>
        <img src={Swiggy} alt="brands"/>
        <img src={Mahindra} alt="brands"/>
      </div>
      <div className="Brands__images">
        <img src={Pwc} alt="brands"/>
        <img src={Unicef} alt="brands"/>
        <img src={Shangri} alt="brands"/>
        <img src={Vistara} alt="brands"/>
        <img src={Airbus} alt="brands"/>
      </div>
    </div>
  )
}

export default Brands
