import './Cart.css'
const Cart = ({cart, removeFormCartHandler}) => {
    return (
        <div>
            <h3>Cart:{cart.length}</h3>
            <div className="cart-container">
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <img  style={{width: 'auto',height: '150px'}} src={bottle.img} alt="" />
                        <button onClick={()=>removeFormCartHandler(bottle.id)}>remove</button>
                    </div>)
                    
                }
            </div>
        </div>

    );
};

export default Cart;