import axios from 'axios'
import course from "../apis/course";
import BaseUrl from '../utils/BaseUrl';
import history from "../utils/History";
import { ERROR_REGISTER, REGISTER, SIGN_IN, SIGN_OUT } from "./types";


export const Register = (formValues)=>(dispatch)=>{
    axios.post(`${BaseUrl}register`,formValues).then(res=>{
        dispatch({type:REGISTER,payload:res.data})
        history.push('/')
    }).catch((err)=>{
            dispatch({type:ERROR_REGISTER,payload:err.response.data.message})
    })
  // navigating get user back to user route
}
export const signIn = (userId)=>{
    return{
        type:SIGN_IN,
        payload:userId
    }
}