import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import MockData from "../MockData/MockData";
import { useParams } from "react-router-dom";
import "./ItemCount.css";

const ItemCount = ({initial}) => {

    const { id } = useParams();
    const cantidad = (MockData.find((product) => product.id === id)).stock;
    const [counter, setCounter] = useState(initial);

    const add = () => {
        if(counter === cantidad){
            alert("Alcanzaste la cantidad máxima");
        } else {
            setCounter(counter + 1);
        }
    }

    const sub = () => {
        if(counter <= 1){
            alert("Debes agregar un producto como mínimo");
        } else {
            setCounter(counter - 1);
        }
    }

    return (
        <div>
            <div className="counterContainer">
                <Button className="counterButton" variant="dark" onClick={sub}><a className="linkButton" href="#sub">  -  </a></Button>
                <p className="counterText">{counter}</p>
                <Button className="counterButton" variant="dark" onClick={add}><a className="linkButton" href="#add">  +  </a></Button>
            </div>
            <div>
                <Button className="cartButton" variant="dark"><Link className="linkButton" href="#cart" to={"/cart"}>Añadir al carrito</Link></Button>
            </div>
        </div>
    )
}

export default ItemCount;