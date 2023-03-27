import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // total price of cart product using reduce
    const totalPrice = cart.reduce((previous,current)=> previous + current.price,0)
    
    // total shipping using for of
    let totalShipping = 0;
    for(let product of cart){
        totalShipping = totalShipping + product.shipping
    }

    const tax = totalPrice * 7/100;
    const grandTotal = totalPrice + totalShipping + tax
    return (
        <div className='cart'>
            <h5 >Order Summery</h5>
            <p>selected Items : {cart.length}</p>
            <p>Total Price : ${totalPrice}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h6>Grand Total : {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;