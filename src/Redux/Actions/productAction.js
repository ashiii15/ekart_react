import { SET_PRODUCTS } from "../Constants/productType"

export const setProducts = (products)=>{
    return {
        type:SET_PRODUCTS,
        payload:products
    }

}