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
        // let newCart = [...cart,product]
        let newCart = []
        // if product doesn't exist the cart then set quantity= 1
        // if exist update quantity by 1
        const exists = cart.find(pd=> pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart,product]
        }else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd=> pd.id !== product.id);
            newCart = [...remaining,exists]
        }
        setCart(newCart)
        addToDb(product.id)

    }

    // get product form localStorage
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1 
        for(const id in storedCart){
            // step 2 find the product using id
            const addedProducts = products.find(product=> product.id === id);
            if(addedProducts){
                // step 3 get product quantity
                const quantity = storedCart[id]
                addedProducts.quantity = quantity 
                // step 4 added product to the saved cart
                savedCart.push(addedProducts)
            }
        }
        // step : 5 set product into setCart
        setCart(savedCart)
    },[products])

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