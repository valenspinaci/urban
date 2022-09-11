import { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./ItemCount.css";

const ItemCount = ({stock, initial}) => {

    const [counter, setCounter] = useState(initial);

    const add = () => {
        if(counter === stock){
            alert("Alcanzaste la cantidad máxima");
        } else {
            setCounter(counter + 1);
        }
    }

    const sub = () => {
        if(counter <= 0){
            alert("No se pueden ingresar valores negativos");
        } else {
            setCounter(counter - 1);
        }
    }

    return (
        <div>
            <div className="counterContainer">
                <Button className="counterButton" variant="dark" onClick={sub}><a className="linkBoton" href="#sub">  -  </a></Button>
                <p className="counterText">{counter}</p>
                <Button className="counterButton" variant="dark" onClick={add}><a className="linkBoton" href="#add">  +  </a></Button>
            </div>
            <div>
                <Button className="cartButton" variant="dark"><a className="linkBoton" href="#cart">  Añadir al carrito  </a></Button>
            </div>
        </div>
    )
}

export default ItemCount;