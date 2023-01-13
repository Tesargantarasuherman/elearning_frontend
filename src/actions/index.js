import axios from 'axios'
import BaseUrl from '../utils/BaseUrl';
import history, { browserHistory } from "../utils/history";
import { REGISTER, SIGN_IN, SIGN_OUT, SET_THEME, SET_LANGUAGE, VALIDATION, MIDDLEWARE, GET_ALL_COURSE, GET_DETAIL_COURSE, TOGLE_SIDEBAR, GET_DETAIL_COURSE_PLAYING } from "./types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
    // history.push('/')
    // navigating get user back to user route
}
export const signIn = (formValues) => (dispatch) => {
    axios.post(`${BaseUrl}login`, formValues).then(res => {
        toast.success('Login Berhasil', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        dispatch({ type: SIGN_IN, payload: res.data?.data?.data })
        localStorage.setItem('_token', res.data.data.token)
        setTimeout(() => {
            browserHistory.push('/user')
        }, 100);
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
}
export const setTheme = (theme) => (dispatch) => {
    dispatch({ type: SET_THEME, payload: theme })
    localStorage.setItem('theme', theme)
}
export const signOut = () => {
    localStorage.setItem('_token', null)
    setTimeout(() => {
        browserHistory.push('/')
    }, 100);
    toast.success('Berhasil Keluar', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
    return {
        type: SIGN_OUT
    };
};
export const setLanguage = (language) => (dispatch) => {
    dispatch({ type: SET_LANGUAGE, payload: language })
    localStorage.setItem('language', language)
}
export const validationUser = (token) => (dispatch) => {

    let _token = {
        "token": localStorage.getItem('_token')
    }
    axios.post(`${BaseUrl}validasi`, _token).then(res => {
        dispatch({ type: VALIDATION, payload: res.data?.data?.data })
    }).catch(err => {
        dispatch({ type: VALIDATION, payload: null })
    })
}
export const getAllCourses = () => (dispatch) => {
    axios.get(`${BaseUrl}kursus`).then(res => {
        dispatch({ type: GET_ALL_COURSE, payload: res.data })
    }).catch((err) => {
        dispatch({ type: GET_ALL_COURSE, payload: [] })
    })
}
export const getDetailCourse = (id) => (dispatch) => {
    axios.get(`${BaseUrl}kursus/${id}`).then(res => {
        dispatch({ type: GET_DETAIL_COURSE, payload: res.data })
    }).catch((err) => {
        dispatch({ type: GET_DETAIL_COURSE, payload: [] })
    })
}
export const getCoursePlaying = (idKursus) => (dispatch,getState) => {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${localStorage.getItem('_token')}`,
        },
    };
    const {id} = getState().auth.data_user;
    axios.get(`${BaseUrl}kursus/${idKursus}/${id}`,axiosConfig).then(res => {
        dispatch({ type: GET_DETAIL_COURSE_PLAYING, payload: res.data })
    }).catch((err) => {
        dispatch({ type: GET_DETAIL_COURSE_PLAYING, payload: [] })
    })
}
export const togleSidebar = (sidebar) => (dispatch) => {
    dispatch({ type: TOGLE_SIDEBAR, payload: sidebar })
}
