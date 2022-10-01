import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./ItemCount.css";
import { useState } from "react";
import { CartContext } from "../../Context/cartContext";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({ counter, setCounter, product}) => {

    const {addToCart} = useContext(CartContext);

    const cantidad = product.stock;

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

    const [buttonCart, setButtonCart] = useState(<Button onClick={ ()=> onAdd (product) } className="cartButton linkButton" variant="dark">Añadir al carrito</Button>);

    const onAdd = ( product ) => {
        setButtonCart(<Button className="cartButton linkButton" variant="dark"><Link className="linkButton" to={"/cart"}>Ir al carrito</Link></Button>);
        setCounter(1);
        addToCart(product, counter);
        toast.success('Producto añadido al carrito', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };

    return (
        <div>
            <div className="counterContainer">
                <Button className="counterButton linkButton" variant="dark" onClick={sub}>  -  </Button>
                <p className="counterText">{counter}</p>
                <Button className="counterButton linkButton" variant="dark" onClick={add}>  +  </Button>
            </div>
            <div className="buttonsCount">
                {buttonCart}
                <Button className="cartButton" variant="dark"><Link className="linkButton" to="/">Volver a inicio</Link></Button>
            </div>
            <ToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default ItemCount;