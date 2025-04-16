import { useState } from "react";
import { CartContext } from "./cartContext.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) =>{
        return cart.some ((item) => item.id === id);
    };

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            alert("Este producto ya está en tu carrito")
        } else{
            setCart([...cart, {...item, quantity}]);
        console.log("cart", [...cart, {...item, quantity}]);
        }
    };

    const filteredQuantityArray = cart.map((item) =>{
        return item.quantity;
    })
    const totalQuantity = filteredQuantityArray.reduce((acc, quantity) => {
            return acc = acc + quantity;
        }, 0);

    const filteredPriceArray = cart.map((item) => {
        return (item.price * item.quantity);
    });
    const totalPrice = filteredPriceArray.reduce((acc, price) => {
        return acc = acc + price;
    }, 0);

    const removeItem = (id) =>{
        setCart(cart.filter((product)=> product.id !== id));
        toast.success('Producto eliminado del carrito', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };

    const clear = () => {
        setCart([]);
        toast.success('El carrito fue vaciado', {
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
        <CartContext.Provider value={{ cart, addToCart, removeItem, clear, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;