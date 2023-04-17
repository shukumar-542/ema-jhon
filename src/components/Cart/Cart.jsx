import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleRemoveCart,children}) => {
    
    // total price of cart product using reduce
    // const totalPrice = cart.reduce((previous,current)=> previous + current.price * current.quantity,0)
    
    // total shipping using for of
    let totalShipping = 0;
    let quantity = 0;
    let totalPrice = 0
    for(let product of cart){
        // product.quantity = product.quantity || 1;
        
        totalPrice = totalPrice + product.price * product.quantity
        totalShipping = totalShipping + product.shipping 
        quantity = quantity + product.quantity
    }

    const tax = totalPrice * 7/100;
    const grandTotal = totalPrice + totalShipping + tax
    return (
        <div className='cart'>
            <h5 >Order Summery</h5>
            <p>selected Items : {quantity}</p>
            <p>Total Price : ${totalPrice}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h6>Grand Total : {grandTotal.toFixed(2)}</h6>
            <button className='clear-cart-btn' onClick={handleRemoveCart}>
                Clear Cart
            <FontAwesomeIcon className='' icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;