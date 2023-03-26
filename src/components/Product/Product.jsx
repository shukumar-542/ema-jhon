import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { name, price, seller, ratings, img } = props.product
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price:${price}</p>
                <p>Manufacturer : {seller} </p>
                <p>Rating:{ratings}</p>
            </div>
            <button className='btn-addToCart'>Add To Cart</button>
        </div>
    );
};

export default Product;