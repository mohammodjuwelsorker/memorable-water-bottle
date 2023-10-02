import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div className="cart-container">
            <img src={cart.img} alt="" />
            <p>{cart.name}</p>
        </div>
    );
};

export default Cart;