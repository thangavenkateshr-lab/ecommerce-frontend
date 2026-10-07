import axios from 'axios';
import { addWishFail, addWishRequest, addWishSuccess, deleteWishFail, deleteWishRequest, deleteWishSuccess, getWishFail, getWishRequest, getWishSuccess } from '../slices/wishSlice';

export const addWish = (id) => async(dispatch) => {
    try{
    dispatch(addWishRequest());
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    const { data } = await axios.post('/api/create/wishlist',{id},config);
    dispatch(addWishSuccess(data));
    }
    catch(error){
        dispatch(addWishFail(error.response.data.message));
    }
}

export const getWishes = () => async(dispatch) => {
    try{
    dispatch(getWishRequest());
    const { data } = await axios.get('/api/wishlists');
    dispatch(getWishSuccess(data))
    }
    catch(error){
        dispatch(getWishFail(error.response.data.message));
    }
}

export const deleteWish = (id) => async(dispatch) => {
    try{
    dispatch(deleteWishRequest());
    await axios.delete(`/api/delete/wishlist/${id}`)
    dispatch(deleteWishSuccess(id));
    }
    catch(error){
        dispatch(deleteWishFail(error.response.data.message));
    }
}