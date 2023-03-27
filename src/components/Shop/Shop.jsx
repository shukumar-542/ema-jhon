import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart,setCart] = useState([])

    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart =(product)=>{
        let newCart = [...cart,product]
        setCart(newCart)
        addToDb(product.id)

        // console.log(product);
    }

    // get product form localStorage
    useEffect(()=>{
        const storedCart = getShoppingCart()
        console.log(storedCart);
    },[])

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
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;