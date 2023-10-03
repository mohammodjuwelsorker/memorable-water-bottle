import './Bottle.css'

const Bottle = ({bottle, addCartHandler}) => {
    // console.log(bottle, addCartHandler)
    const {name, price, img } = bottle
    return (
        <div className="bottle-box">
            <h3>Bottle: {name}</h3> 
            <img style={{
                width: '300px'
            }} src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={() => addCartHandler(bottle)}>Parches</button>
        </div>
    );
};

export default Bottle;