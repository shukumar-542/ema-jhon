import { getShoppingCart } from "../utilities/fakedb"

const cartProductsLoader = async()=>{
    const loadedProducts =  await fetch('products.json')
    const products  =  await loadedProducts.json()

    const storedCart = getShoppingCart()
    const savedCart = []
    for (let id in storedCart){
        const addedProducts = products.find(pd => pd.id === id)
        // console.log(addedProducts);
        if(addedProducts){
            const quantity = storedCart[id]
            addedProducts.quantity = quantity
            savedCart.push(addedProducts)
        }
    }
    return savedCart
    

}
 export default cartProductsLoader;