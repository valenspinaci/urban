import carrito from "../../Images/carrito.png";
import "./CartWidget.css";
const CartWidget = () => {
    return (
        <img className='carrito' src={carrito} alt="carrito"/>
    )
}

export default CartWidget;