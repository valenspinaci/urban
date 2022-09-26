import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import "./Cart.css";
import corazon from "../../Images/corazon-roto.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const Cart = () => {
    const {cart, removeItem, totalQuantity, totalPrice, clear} = useContext(CartContext)
    const rutaInicial = "../../img/"
    return (
        (<div className="cartContainer">
            {cart.length === 0 ?
            <div>
                <img src={corazon} alt="corazon" className="img-corazon"/>
                <h2>No hay productos en el carrito</h2>
                <Button className="emptyButton"><Link className="linkButton" to="/">Volver a inicio</Link></Button>
            </div>:
            <>
            {cart.map((item) =>(
                <div key={item.id} className="contenedorCart">
                    <Card className="displayCard" style={{ width: '100%' }}>
                        <Card.Img className="image" variant="start" src={rutaInicial + item.image} />
                        <Card.Body className="bodyCard">
                            <Card.Title className="my-2 fw-bold"><h2>{item.product}</h2></Card.Title>
                            <Card.Text>
                                <p className="detailCard">{item.quantity} agregado/s al carrito</p>
                                <p className="detailCard fw-bold">${item.price}<span className="smallLetters fw-normal"> c/u</span></p>
                                <h3 className="detailCard fw-bold"><span className="fw-normal totalCard">Total:</span> ${item.quantity * item.price}</h3>
                            </Card.Text>
                        </Card.Body>
                        <Button variant="dark" className="removeButton linkButton" onClick={()=>removeItem(item.id)}>Remover item</Button>
                    </Card>
                </div>
            ))}
            <div className="resumeContainer">
                <p className="ms-auto my-auto totalQuant">{totalQuantity} producto/s agregado/s</p>
                <h2 className="me-4 totalPrice"><span>Total:</span> ${totalPrice}</h2>
            </div>

            <div className="buttonsContainer">
                <Button onClick={()=>clear()} className="linkButton emptyButton">Vaciar carrito</Button>
                <Button className="linkButton emptyButton">Continuar compra</Button>
            </div>
            </>
            }
        </div>)
    )
}

export default Cart;