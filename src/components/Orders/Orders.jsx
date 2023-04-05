import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handelRemoveItem =(id)=>{
        const remainingItem = cart.filter(item => item.id != id)
        setCart(remainingItem);
        removeFromDb(id)
    }
    console.log(savedCart);
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(cart => <ReviewItem 
                        key = {cart.id}
                        cart={cart}
                        handelRemoveItem={handelRemoveItem}
                        ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;