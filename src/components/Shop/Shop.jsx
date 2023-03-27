import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart,setCart] = useState([])

    console.log(cart);
    const totalPrice = cart.reduce((previous,current)=> previous + current.price,0)
    console.log(totalPrice);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart =(product)=>{
        let newCart = [...cart,product]
        setCart(newCart)
        // console.log(product);
    }
    return (
        <div className='shop-container'>
           <div className='product-container'>
                {
                    products.map(product => <Product 
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        key={product.id}
                        ></Product>)
                }
           </div>
           <div className='cart-container'>
            <h5 >Order Summery</h5>
            <p>selected Items : {cart.length}</p>
            <p>Total Price : ${totalPrice}</p>
           </div>
        </div>
    );
};

export default Shop;