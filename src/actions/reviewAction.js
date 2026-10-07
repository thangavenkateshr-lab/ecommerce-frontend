import { createReviewFail, createReviewRequest, createReviewSuccess, deleteReviewFail, deleteReviewRequest, deleteReviewSuccess, getReviewsFail, getReviewsRequest, getReviewsSuccess } from '../slices/reviewSlice';
import axios from 'axios';

export const reviewCreate = (formData) => async(dispatch) => {
    try{
        dispatch(createReviewRequest());
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        const { data } = await axios.post(formData, config);
        dispatch(createReviewSuccess(data));
    }
    catch(error){
        dispatch(createReviewFail(error.response.data.message));
    }
}

export const showReview = (id) => async(dispatch) => {
    try{
        dispatch(getReviewsRequest());
        const { data } = await axios.get(`/api/get/reviews?id=${id}`);
        dispatch(getReviewsSuccess(data));
    }
    catch(error){
        dispatch(getReviewsFail(error.response.data.message));
    }
}

export const deleteReview = (formData) => async(dispatch) => {
    try{
        dispatch(deleteReviewRequest());
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        const { data } = await axios.delete(formData, config);
        dispatch(deleteReviewSuccess(data));
    }
    catch(error){
        dispatch(deleteReviewFail(error.response.data.message));
    }
}

export const clearErrorReview = () => async(dispatch) => {
    dispatch(clearReviewError());
}