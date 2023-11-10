import { ADD_CART, ADD_WISHLIST, DELETE_CART, DELETE_WISHLIST, EMPTY_PRODUCT_LIST, SELECTED_PRODUCT, SET_PRODUCTS } from "../Constants/productType"

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
export const deleteCart =(id)=>{
    return {
        type:DELETE_CART,
        payload :id
    }
}
export const addWishList =(product)=>{
    return {
        type:ADD_WISHLIST,
        payload:product
    }
}
export const deleteWishList =(id)=>{
    return {
        type:DELETE_WISHLIST,
        payload :id
    }
}
export const selectedProduct = (product)=>{
    return {
        type:SELECTED_PRODUCT,
        payload:product
    }
}
export const emptyproduct = ()=>{
    return {
        type:EMPTY_PRODUCT_LIST,
        
    }
}