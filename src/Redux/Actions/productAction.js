import { ADD_CART, SET_PRODUCTS } from "../Constants/productType"

export const setProducts = (products)=>{
    return {
        type:SET_PRODUCTS,
        payload:products
    }

}
export const addCart = (product)=>{
    return {
        type:ADD_CART,
        payload:product
    }
}