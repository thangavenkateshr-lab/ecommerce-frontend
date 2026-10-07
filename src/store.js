import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import productReducer from './slices/productSlice';
import userReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import wishReducer from './slices/wishSlice';
import reviewReducer from './slices/reviewSlice';
const reducer = combineReducers({
    productsState : productsReducer,
    productState : productReducer,
    authState : userReducer,
    cartState : cartReducer,
    wishState : wishReducer,
    reviewState : reviewReducer
});

const store = configureStore({
    reducer
});

export default store;