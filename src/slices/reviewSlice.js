import { createSlice } from '@reduxjs/toolkit';

const reviewSlice = createSlice({
    name : 'review',
    initialState : {
        loading : false,
        reviews : []
    },
    reducers : {
        createReviewRequest(state, action){
            return {
                ...state,
                loading : true
            }
        },
        createReviewSuccess(state, action){
            return {
                ...state,
                loading : false,
                review : action.payload.review
            }
        },
        createReviewFail(state, action){
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        },
        getReviewsRequest(state, action){
            return {
                ...state,
                loading : true
            }
        },
        getReviewsSuccess(state, action){
            return {
                ...state,
                loading : false,
                reviews : action.payload.reviews
            }
        },
        getReviewsFail(state, action){
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        },
        deleteReviewRequest(state, action){
            return {
                ...state,
                loading : true
            }
        },
        deleteReviewSuccess(state, action){
            state.loading = false;
            state.reviews = state.reviews.filter((review) => review.id !=  action.payload);
        },
        deleteReviewFail(state, action){
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        },
        clearReviewError(state, action){
            return {
                ...state,
                error : null
            }
        }
    }
});


const { actions, reducer } = reviewSlice;

export const { createReviewRequest,
    createReviewSuccess,
    createReviewFail,
    getReviewsRequest,
    getReviewsSuccess,
    getReviewsFail,
    deleteReviewRequest,
    deleteReviewSuccess,
    deleteReviewFail
 } = actions;

 export default reducer;