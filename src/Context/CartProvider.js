import { useState } from "react";
import { CartContext } from "./cartContext.js"

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            alert("Este producto ya está en tu carrito")
        } else{
            setCart([...cart, {...item, quantity}]);
        console.log("cart", [...cart, {...item, quantity}]);
        }
    };

    const isInCart = (id) =>{
        return cart.some ((item) => item.id === id)
    }

    const removeItem = (id) =>{
        const removeObject = cart.some((item) => item.id === id);
        cart.splice(removeObject, 1)
    }

    const clear = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;