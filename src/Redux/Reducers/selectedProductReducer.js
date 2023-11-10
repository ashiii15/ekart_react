import { EMPTY_PRODUCT_LIST, SELECTED_PRODUCT } from "../Constants/productType";
const initialState = {
    selectedProduct :[]
}

export const selectedProductReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SELECTED_PRODUCT:
                return {...state,
                    selectedProduct:action.payload   
                }
                case EMPTY_PRODUCT_LIST:
                    return {
                        selectedProduct:{}
                    }
            
            default:
                return state;
    }
}