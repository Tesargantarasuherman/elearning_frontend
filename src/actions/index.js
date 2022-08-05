import axios from 'axios'
import course from "../apis/course";
import BaseUrl from '../utils/BaseUrl';
import history from "../utils/History";
import {REGISTER, SIGN_IN, SIGN_OUT,SET_THEME, GET_LANGUAGE, SET_LANGUAGE } from "./types";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from 'react-i18next';


export const Register = (formValues)=>(dispatch)=>{
    axios.post(`${BaseUrl}register`,formValues).then(res=>{
        dispatch({type:REGISTER,payload:res.data})
        return(
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
    }).catch((err)=>{
        return(
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
  // navigating get user back to user route
}
export const signIn = (userId)=>{
    return{
        type:SIGN_IN,
        payload:userId
    }
}
export const setTheme = (theme)=>(dispatch)=>{
    dispatch({type:SET_THEME,payload:theme})
    localStorage.setItem('theme',theme)
}
export const setLanguage = (language)=>(dispatch)=>{
    dispatch({type:SET_LANGUAGE,payload:language})
    localStorage.setItem('language',language)
}
