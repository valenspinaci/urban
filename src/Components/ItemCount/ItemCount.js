import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import MockData from "../MockData/MockData";
import "./ItemCount.css";
import { useState } from "react";
import { CartContext } from "../../Context/cartContext";
import { useContext } from "react";

const ItemCount = ({ counter, setCounter, quantity, setQuantity, product}) => {

    const {addToCart} = useContext(CartContext);

    const { id } = useParams();
    const cantidad = (MockData.find((product) => product.id === id)).stock;
    const [buttonCart, setButtonCart] = useState("Añadir al carrito");

    const add = () => {
        if(counter === cantidad){
            alert("Alcanzaste la cantidad máxima");
        } else {
            setCounter(counter + 1);
        }
    };

    const sub = () => {
        if(counter <= 1){
            alert("Debes agregar un producto como mínimo");
        } else {
            setCounter(counter - 1);
        }
    };

    const onAdd = ( product ) => {
        setButtonCart(<Link className="linkButton" to={"/cart"}>Ir al carrito</Link>);
        setCounter(1);
        addToCart(product, counter);
    };

    return (
        <div>
            <div className="counterContainer">
                <Button className="counterButton" variant="dark" onClick={sub}><a className="linkButton" href="#sub">  -  </a></Button>
                <p className="counterText">{counter}</p>
                <Button className="counterButton" variant="dark" onClick={add}><a className="linkButton" href="#add">  +  </a></Button>
            </div>
            <div className="buttonsCount">
                <Button onClick={ ()=> onAdd (product) } className="cartButton linkButton" variant="dark">{buttonCart}</Button>
                <Button className="cartButton" variant="dark"><Link className="linkButton" to="/">Volver a inicio</Link></Button>
            </div>
        </div>
    )
}

export default ItemCount;