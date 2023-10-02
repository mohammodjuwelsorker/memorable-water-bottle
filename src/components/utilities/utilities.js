const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartToLs = (cart) => {
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify)

}


const addCartToLs = id => {
    const cart = getStoredCart();
    cart.push(id);
    // the call saveToLs function in here
    saveCartToLs(cart)
}

export {addCartToLs, getStoredCart}