import { ADD_CART, DELETE_CART } from "../Constants/productType";
const initialState = {
    cart :[]
}

export const cartReducer =(state=initialState,action)=>{
    switch (action.type) {
        case ADD_CART:
            return {...state,
            cart:state.cart.concat(action.payload)
            }
            case DELETE_CART:
                return {...state,
                cart :state.cart.filter((product)=>product.id !== action.payload)}
                
        default:
            return state
    }
}