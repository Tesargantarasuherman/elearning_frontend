import axios from "axios";
import React, { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import BaseUrl from "../utils/BaseUrl";
import axiosConfig from "../utils/Config";
import { ToastContainer, toast } from "react-toastify";
import LoginComponent from "../components/Login/LoginComponent";
import API from "../services";
function Login() {
  const navigate = useNavigate();

  const [isSubmiting, setIsSubmiting] = useState(false);
  const [formLogin, setFormLogin] = useState({ email: "", password: null });
  const { login, setLogin } = useContext(AuthContext);
  const [errLogin, setErrorLogin] = useState('')
  const [errActive, setErrActive] = useState('unactive')

  const handleChangeFormLogin = (e) => {
    const { name, value } = e.target;

    setFormLogin(
      {
        ...formLogin,
        [name]: value,
      },
      console.log(formLogin)
    );
  };

  const handleLogin = (e) => {
    e.preventDefault()
    setIsSubmiting(true);
    API.postLogin(formLogin).then(res => {
      console.log(res.data.data.data.role)
      localStorage.setItem("data_user", JSON.stringify(res.data.data));
      setLogin(JSON.parse(localStorage.getItem("data_user")));
      if ((res.data.data.data.role == 'admin')) {
        navigate('/')
        return window.location.reload();
      }
      else {
        navigate('/')
      }
    })
    // axios
    //   .post(`${BaseUrl}login`, formLogin, axiosConfig)
    //   .then((res) => {
    //     toast.success("Berhasil Login");

    //   })
    //   .catch((err) => {
    //     console.log('err', errActive)
    //     setErrorLogin('Password Salah');
    //     setErrActive('active');
    //     setIsSubmiting(false);
    //   });
  };

  return (
    <LoginComponent errActive={errActive} errLogin={errLogin} handleLogin={handleLogin} handleChangeFormLogin={handleChangeFormLogin} />
  );
}
export default Login;