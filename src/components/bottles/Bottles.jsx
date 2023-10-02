import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'
import { addCartToLs, getStoredCart } from "../utilities/utilities";
import Cart from "../cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([])
    // the cart data in here 
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))

    }, [])

    const addCartHandler = bottle => {
        const newCart = [...cart, bottle]
        // console.log(newCart.length)
        setCart(newCart)
        addCartToLs(bottle.id)
    }


    // data load 
    useEffect(() => {
        console.log('call the useEffect', bottles.length)
        if (bottles.length) {
            const storeCarts = getStoredCart()
            // console.log(storeCart)
            // the create empty array in here 
            const storedCart = []

            // storeCarts for loop in here 
            for (let id = 0; id < storeCarts.length; id++) {
                const storeId = storeCarts[id]
                const bottle = bottles.find(bottle => bottle.id === storeId);
                console.log(bottle)
                // the storedCart is data  pushing 
                storedCart.push(bottle);
            }
            console.log(storedCart);
            setCart(storedCart)
        }


    }, [bottles])

    return (
        <div>
            <h3>Bottle Here: {bottles.length}</h3>
            <h4>cart: {cart.length}</h4>
            <div className="cart-box">
                {
                    cart.map(cart => <Cart cart={cart}></Cart>)
                }
            </div>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        addCartHandler={addCartHandler}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;