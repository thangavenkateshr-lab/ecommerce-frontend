import { createSlice } from '@reduxjs/toolkit';

const wishSlice = createSlice({
    name: 'wishlist',
    initialState: {
        loading: false,
        wishLists: [],
        wishList: {}
    },
    reducers: {
        addWishRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        addWishSuccess(state, action) {
            return {
                ...state,
                loading: false,
                wishList: action.payload.wishList
            }
        },
        addWishFail(state, action) {
            return {
                ...state,
                loading: false,
                wishError: action.payload
            }
        },
        getWishRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        getWishSuccess(state, action) {
            return {
                ...state,
                loading: false,
                wishLists: action.payload.wishLists
            }
        },
        getWishFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        deleteWishRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        deleteWishSuccess(state, action) {
            state.loading = false;
            state.wishLists = state.wishLists.filter(
                item => item._id !== action.payload
            );
        },
        deleteWishFail(state, action) {
            return {
                ...state,
                loading: false,
                error: null
            }
        },
        clearWishError(state, action) {
            return {
                ...state,
                error: null
            }
        }
    }
});

export const { actions, reducer } = wishSlice;

export const { addWishRequest,
    addWishSuccess,
    addWishFail,
    getWishRequest,
    getWishSuccess,
    getWishFail,
    deleteWishRequest,
    deleteWishSuccess,
    deleteWishFail,
    clearWishError
} = actions;

export default reducer;