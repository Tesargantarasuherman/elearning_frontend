import axios from 'axios'
import course from "../apis/course";
import BaseUrl from '../utils/BaseUrl';
import history from "../utils/History";
import {REGISTER, SIGN_IN, SIGN_OUT } from "./types";
import { ToastContainer, toast } from "react-toastify";


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