import { addCartFail, addCartRequest, addCartSuccess, clearCartError, deleteCartFail, deleteCartRequest, deleteCartSuccess, getCartsFail, getCartsRequest, getCartsSuccess, updateCartFail, updateCartRequest, updateCartSuccess } from '../slices/cartSlice';
import axios from 'axios'

export const addCart = (formData) => async(dispatch) => {
    try{
        dispatch(addCartRequest());
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        const { data } = await axios.post('/api/create/cart', formData, config);
        dispatch(addCartSuccess(data));
    }
    catch(error){
        dispatch(addCartFail(error.response.data.message));
    }
}

export const showCart = () => async(dispatch) => {
    try{
        dispatch(getCartsRequest());
        const { data } = await axios.get('/api/carts');
        dispatch(getCartsSuccess(data));
    }
    catch(error){
        dispatch(getCartsFail(error.response.data.message));
    }
}

export const cartUpdate = (id, quantity) => async(dispatch) => {
    try{
        dispatch(updateCartRequest());
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        const { data } = await axios.put(`/api/update/cart/${id}`,{ quantity },config);
        dispatch(updateCartSuccess(data));
        dispatch(showCart());
    } catch(error){
        dispatch(updateCartFail(error.response.data.message));
    }
}

export const deleteCart = (id) => async(dispatch) => {
    try{
        dispatch(deleteCartRequest());
        await axios.delete(`/api/delete/cart/${id}`);
        dispatch(deleteCartSuccess(id));
        dispatch(showCart());
    }catch(error){
        dispatch(deleteCartFail(error.response.data.message));
    }
}

export const clearErrorCart = () => async(dispatch) => {
    dispatch(clearCartError());
}