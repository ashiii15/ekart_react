import { SET_PRODUCTS } from "../Constants/productType";

const initialState = {
    products:[]
}
export const  productReducer =(state=initialState,action)=>{
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state,
                products:action.payload

            }
                
        default:
            return state;
    }
}