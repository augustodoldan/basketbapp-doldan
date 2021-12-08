import './CartWidget.css'
import {useState} from 'react'

const CartWidget =()=>{

const [count, setCount] = useState(0)

const handleClick=()=>{
    setCount(prevCount=>prevCount + 1)
}
return(
<div className="container-CartWidget">
<div className="elements-CartWidget">
<img src="../../assets/shopping-cart.png" alt="Cart Widget" id="cart-widget" onClick={handleClick}/>
<p onClick={handleClick}>{count}</p>
</div>
</div>
)


}

export default CartWidget