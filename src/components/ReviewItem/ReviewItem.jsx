import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ReviewItem = ({cart,handelRemoveItem}) => {
    const {id,name,price,quantity,img} = cart
    // console.log(img);
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price : <span className='orange-text'>${price}</span></p>
                <p>Order Quantity  : <span className='orange-text'>${quantity}</span></p>
                
            </div>
            <button className='delete-btn' onClick={()=>handelRemoveItem(id)}>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
            <Link to='/orders'>
                        <button>Checkout</button>
                    </Link>
        </div>
    );
};

export default ReviewItem;