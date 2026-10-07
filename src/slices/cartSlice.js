import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        loading: false,
        carts: [],
        cart : {}
    },
    reducers: {
        addCartRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        addCartSuccess(state, action) {
            return {
                ...state,
                loading: false,
                cart: action.payload.cart
            }
        },
        addCartFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        getCartsRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        getCartsSuccess(state, action) {
            return {
                ...state,
                loading: false,
                carts: action.payload.carts
            }
        },
        getCartsFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        updateCartRequest(state, action){
            return {
                ...state,
                loading : true
            }
        },
        updateCartSuccess(state, action){
            return {
                ...state,
                loading : false
            }
        },
        updateCartFail(state, action){
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        },
        deleteCartRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        deleteCartSuccess(state, action) {
            state.loading = false;
            state.carts = state.carts.filter(
                cart => cart._id !== action.payload
            );
        },
        deleteCartFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        clearCartError(state, action) {
            return { 
                ...state,
                error : null
            }
        }
    }
});

const { reducer, actions } = cartSlice;

export const { addCartRequest, addCartSuccess, addCartFail, getCartsRequest, getCartsSuccess, getCartsFail, updateCartRequest, updateCartSuccess, updateCartFail, deleteCartRequest, deleteCartSuccess, deleteCartFail, clearCartError } = actions;

export default reducer;