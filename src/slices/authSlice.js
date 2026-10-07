import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name : "user",
    initialState : {
        loading : false,
        isAuthenticate : false
    },
    reducers : {
        loginRequest(state, action){
            return {
                ...state,
                loading : true
            }
        },
        loginSuccess(state, action){
            return {
                loading : false,
                isAuthenticate : true,
                user : action.payload.user
            }
        },
        loginFail(state, action){
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        },
        clearError(state, action){
            return {
                ...state,
                error : null
            }
        },
        registerRequest(state, action){
            return {
                ...state,
                loading : true
            }
        },
        registerSuccess(state, action){
            return {
                loading : false,
                isAuthenticate : false,
                user : action.payload.user
            }
        },
        registerFail(state, action){
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        },
        loadUserRequest(state, action){
            console.log("SUCCESS", action.payload);
            return {
                ...state,
                loading : true
            }
        },
        loadUserSuccess(state, action){
            return {
                loading : false,
                isAuthenticate : true,
                user : action.payload.user
            }
        },
        loadUserFail(state, action){
            return {
                ...state,
                loading : false
            }
        },
        logoutRequest(state, action){
            return {
                ...state,
                loading : true,
                isAuthenticate : true
            }
        },
        logoutSuccess(state, action){
            return {
                loading : false,
                isAuthenticate : false
            }
        },
        logoutFail(state, action){
            return {
                ...state,
                loading : false,
                isAuthenticate : false,
                error : action.payload
            }
        },
        updateProfileRequest(state, action){
            return {
                ...state,
                loading : true
            }
        },
        updateProfileSuccess(state, action){
            return {
                ...state,
                loading : false,
                isUpdated : true,
                user : action.payload.user
            }
        },
        updateProfileFail(state, action){
            return { 
                ...state,
                loading : false,
                error : action.payload
            }
        },
        resetUpdateProfile(state, action){
            return {
                ...state,
                isUpdated : false
            }
        },
        updatePasswordRequest(state, action){
            return {
                ...state,
                loading : true
            }
        },
        updatePasswordSuccess(state, action){
            return { 
                ...state,
                loading : false,
                isUpdated : true
            }
        },
        updatePasswordFail(state, action){
            return { 
                ...state,
                loading : false,
                error : action.payload
            }
        },
        resetUpdatePassword(state, action){
            return {
                ...state,
                isUpdated : false
            }
        },
        forgotPasswordRequest(state, action){
            return { 
                ...state,
                loading : true
            }
        },
        forgotPasswordSuccess(state, action){
            return {
                ...state,
                loading : false,
                message : action.payload.message
            }
        },
        forgotPasswordFail(state, action){
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        },
        resetPasswordRequest(state, action){
            return {
                ...state,
                loading : true
            }
        },
        resetPasswordSuccess(state, action){
            return {
                ...state,
                loading : false,
                isAuthenticate : true,
                user : action.payload.user
            }
        },
        resetPasswordFail(state, action){
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        }
    }
});


const { actions, reducer } = userSlice;

export const { loginRequest,
    loginSuccess,
    loginFail,
    clearError,
    registerRequest,
    registerSuccess,
    registerFail,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail,
    logoutRequest,
    logoutSuccess,
    logoutFail,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFail,
    resetUpdateProfile,
    updatePasswordRequest,
    updatePasswordSuccess,
    updatePasswordFail,
    resetUpdatePassword,
    forgotPasswordRequest,
    forgotPasswordSuccess,
    forgotPasswordFail,
    resetPasswordRequest,
    resetPasswordSuccess,
    resetPasswordFail} = actions;

export default reducer;