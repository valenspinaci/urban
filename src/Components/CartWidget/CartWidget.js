import carrito from "../../Images/carrito.png";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <div className="displayCartWidget">
            <img className='carrito' src={carrito} alt="carrito"/>
            <p className="totalQuantity">{totalQuantity}</p>
        </div>
    )}


export default CartWidget;