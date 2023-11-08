import { ADD_CART } from "../Constants/productType";
const initialState = {
    cart :[]
}

export const cartReducer =(state=initialState,action)=>{
    switch (action.type) {
        case ADD_CART:
            return {...state,
            cart:state.cart.concat(action.payload)
            }
                
        default:
            return state
    }
}