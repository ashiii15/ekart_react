import { combineReducers } from "redux";
import { productReducer, selectedProductreducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { wishListReducer } from "./WishListReducer";
import { selectedProductReducer } from "./selectedProductReducer";

export const reducers = combineReducers({
    allProducts : productReducer,
    addToCart :cartReducer,
    addToWishList :wishListReducer,
    selectedProducts :selectedProductReducer
})