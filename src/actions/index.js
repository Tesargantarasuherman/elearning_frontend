import axios from 'axios'
import BaseUrl from '../utils/BaseUrl';
import history from "../utils/History";
import { REGISTER, SIGN_IN, SIGN_OUT, SET_THEME, SET_LANGUAGE, VALIDATION } from "./types";
import { toast } from "react-toastify";



export const Register = (formValues) => (dispatch) => {
    axios.post(`${BaseUrl}register`, formValues).then(res => {
        dispatch({ type: REGISTER, payload: res.data })
        return (
            toast.success('Registrasi Berhasil', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        )
        // history.push('/')
    }).catch((err) => {
        return (
            toast.error(err.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        )
    })
    history.push('/')
    // navigating get user back to user route
}
export const signIn = (formValues) => (dispatch) => {
    axios.post(`${BaseUrl}login`, formValues).then(res => {
        dispatch({ type: SIGN_IN, payload: res.data?.data?.data })
        localStorage.setItem('_token',res.data.data.token)
        return (
            toast.success('Login Berhasil', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        )
    }).catch((err) => {
        return (
            toast.error(err.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        )
    })
    history.push('/')
}
export const setTheme = (theme) => (dispatch) => {
    dispatch({ type: SET_THEME, payload: theme })
    localStorage.setItem('theme', theme)
}
export const setLanguage = (language) => (dispatch) => {
    dispatch({ type: SET_LANGUAGE, payload: language })
    localStorage.setItem('language', language)
}
export const validationUser= (token) => (dispatch) => {

    let _token = {
        "token":localStorage.getItem('_token')
    }
    axios.post(`${BaseUrl}validasi`, _token).then(res => {
        dispatch({ type: VALIDATION, payload: res.data?.data?.data  })
    }).catch(err=>{
        dispatch({ type: VALIDATION, payload:null })
    })
}
