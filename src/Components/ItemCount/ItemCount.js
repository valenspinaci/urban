import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import MockData from "../MockData/MockData";
import { useParams } from "react-router-dom";
import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ counter, setCounter, quantity, setQuantity}) => {

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

    const onAdd = ()=>{
        setQuantity(counter);
        setButtonCart(<Link className="linkButton" to={"/cart"}>Ir al carrito</Link>);
        setCounter(1);
    };

    return (
        <div>
            <div className="counterContainer">
                <Button className="counterButton" variant="dark" onClick={sub}><a className="linkButton" href="#sub">  -  </a></Button>
                <p className="counterText">{counter}</p>
                <Button className="counterButton" variant="dark" onClick={add}><a className="linkButton" href="#add">  +  </a></Button>
            </div>
            <div>
                <Button onClick={onAdd} className="cartButton" variant="dark">{buttonCart}</Button>
            </div>
        </div>
    )
}

export default ItemCount;