import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    
    const { name, price, seller, ratings, img } = props.product;
    const handleAddToCart = props.handleAddToCart
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price:${price}</p>
                <p>Manufacturer : {seller} </p>
                <p>Rating:{ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)}  className='btn-addToCart'>
                Add To Cart 
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;