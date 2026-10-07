import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name : 'order',
    initialState : {
        loading : false,
        orders : [],
        order : {},
        isUpdated : false,
        isDeleted : false
    },
    reducers : {
        createOrderRequest(state, action){
            return { 
                ...state,
                loading : true
            }
        },
        createOrderSuccess(state, action){
            return {
                ...state,
                loading : false,
                order : action.payload.order
            }
        },
        createOrderFail(state, action){
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        },
        getAllOrdersRequest(state, action){
            return {
                ...state,
                loading : true
            }
        },
        getAllOrdersSuccess(state, action){
            return {
                ...state,
                loading : false,
                orders : action.payload.orders
            }
        },
        getAllOrdersFail(state, action){
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        },
        getSingleOrderRequest(state, action){
            return {
                ...state,
                loading : true
            }
        },
        getSingleOrderSuccess(state, action){
            return { 
                ...state,
                loading : false,
                order : action.payload.order
            }
        },
        getSingleOrderFail(state, action){
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        },
        updateOrderRequest(state, action){
            return { 
                ...state,
                loading : true
            }
        },
        updateOrderSuccess(state, action){
            return {
                ...state,
                loading : false
            }
        },
        updateOrderFail(state, action){
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        },
        deleteOrderRequest(state, action){
            return {
                ...state,
                loading : true
            }
        },
        deleteOrderSuccess(state, action){
            return {
                ...state,
                loading : false
            }
        },
        deleteOrderFail(state, action){
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        },
        clearOrderError(state, action){
            return{
                ...state,
                error : null
            }
        }
    }
});

const { reducer, actions } = orderSlice;

export const { createOrderRequest,
    createOrderSuccess,
    createOrderFail,
    getAllOrdersRequest,
    getAllOrdersSuccess,
    getAllOrdersFail,
    getSingleOrderRequest,
    getSingleOrderSuccess,
    getSingleOrderFail,
    updateOrderRequest,
    updateOrderSuccess,
    updateOrderFail,
    deleteOrderRequest,
    deleteOrderFail,
    deleteOrderSuccess
 } = actions;