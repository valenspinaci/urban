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
    };

    const filteredQuantityArray = cart.map((item) =>{
        return item.quantity
    })
    const totalQuantity = filteredQuantityArray.reduce((acc, quantity) => {
            return acc = acc + quantity;
        }, 0);

    const filteredPriceArray = cart.map((item) => {
        return (item.price * item.quantity)
    });
    const totalPrice = filteredPriceArray.reduce((acc, price) => {
        return acc = acc + price
    }, 0);

    const removeItem = (id) =>{
        let newArray = [];
        cart.forEach((product) => {
            if(product.id !== id){
                newArray.push(product)
            }
        });
        setCart(newArray);
    };

    const clear = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clear, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;