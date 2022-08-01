import axios from 'axios'
import course from "../apis/course";
import history from "../utils/History";
import { ERROR_REGISTER, REGISTER, SIGN_IN, SIGN_OUT } from "./types";


export const Register = (formValues)=>(dispatch)=>{
    axios.post(`http://localhost:8000/api/v1/register`,formValues).then(res=>{
        dispatch({type:REGISTER,payload:res.data})
    }).catch((err)=>{
            dispatch({type:ERROR_REGISTER,payload:err.response.data.message})
    })
  // navigating get user back to user route
  history.push('/')
}
export const signIn = (userId)=>{
    return{
        type:SIGN_IN,
        payload:userId
    }
}