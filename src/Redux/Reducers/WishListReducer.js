import { ADD_WISHLIST, DELETE_WISHLIST } from "../Constants/productType";
const initialState = {
    wishList:[]
}
export const wishListReducer =(state=initialState,action)=>{
    switch (action.type){
        case ADD_WISHLIST:
            return {...state,
            wishList:state.wishList.concat(action.payload)}
            case DELETE_WISHLIST:
            return {...state,
            wishList:state.wishList.filter((product)=>product.id !== action.payload)}
            default:
                return state
    }

}