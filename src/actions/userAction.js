import { loginRequest,
    loginSuccess,
    loginFail,
    clearError,
    registerFail,
    registerRequest,
    registerSuccess,
    logoutFail,
    logoutRequest,
    logoutSuccess,
    loadUserFail,
    loadUserRequest,
    loadUserSuccess,
    updateProfileRequest,
    updateProfileFail,
    updateProfileSuccess,
    resetUpdateProfile,
    updatePasswordRequest,
    updatePasswordFail,
    updatePasswordSuccess,
    resetUpdatePassword,
    forgotPasswordFail,
    forgotPasswordRequest,
    forgotPasswordSuccess,
    resetPasswordFail,
    resetPasswordRequest,
    resetPasswordSuccess } from '../slices/authSlice'
import axios from 'axios';

export const login = (email, password) => async(dispatch) => {
    try{
        dispatch(loginRequest());
        const { data } = await axios.post(`/api/login`,{email, password});
        dispatch(loginSuccess(data));
    }
    catch(error){
        dispatch(loginFail(error.response.data.message));
    }
}

export const clearAuthError = () => dispatch => {
    dispatch(clearError());
}

export const register = (userData) => async(dispatch) => {
    try{
        dispatch(registerRequest());
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        const { data } = await axios.post('/api/register',userData,config); 
        dispatch(registerSuccess(data));
    }
    catch(error){
        dispatch(registerFail(error.response.data.message));
    }
}

export const loadUser = () => async(dispatch) => {
    try{
        dispatch(loadUserRequest());
        const { data } = await axios.get('/api/user/profile');
        dispatch(loadUserSuccess(data));
    }
    catch(error){
        dispatch(loadUserFail(error.response.data.message));
    }
}

export const logout = () => async(dispatch) => {
    try{
        dispatch(logoutRequest());
        const { data } = await axios.get('/api/logout');
        dispatch(logoutSuccess(data));
    }
    catch(error){
        dispatch(logoutFail(error.response.data.message));
    }
}

export const updateProfile = (userData) => async(dispatch) => {
    try{
        dispatch(updateProfileRequest());
        const config = {
            headers : {
                'Content-Type':'application/json'
            }
        }
        const { data } = await axios.put('/api/update/profile', userData, config);
        dispatch(updateProfileSuccess(data));
    }
    catch(error){
        dispatch(updateProfileFail(error.response.data.message));
    }
}

export const clearUpdateProfile = () => (dispatch) => {
    dispatch(resetUpdateProfile());
};

export const updatePassword = (formData) => async(dispatch) => {
    try{
        dispatch(updatePasswordRequest());
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        await axios.put('/api/password/change', formData, config)
        dispatch(updatePasswordSuccess());
    }
    catch(error){
        dispatch(updatePasswordFail(error.response.data.message));
    }
}

export const clearUpdatePassword = () => (dispatch) => {
    dispatch(resetUpdatePassword());
};

export const forgotPassword = (formData) => async(dispatch) => {
    try{
        dispatch(forgotPasswordRequest());
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        const { data } =  await axios.post('/api/password/forgot',formData, config);
        dispatch(forgotPasswordSuccess(data));
    }
    catch(error){
        dispatch(forgotPasswordFail(error.response.data.message));
    }
}

export const resetPassword = (formData, token) => async(dispatch) => {
    try{
        dispatch(resetPasswordRequest());
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        const  { data } = await axios.post(`/api/password/reset/${token}`,formData, config);
        dispatch(resetPasswordSuccess(data));
    }
    catch(error){
        dispatch(resetPasswordFail(error.response.data.message));
    }
}