import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthContext";
import BaseUrl from "../utils/BaseUrl";
import axiosConfig from "../utils/Config";
import { ToastContainer, toast } from "react-toastify";
import RegiserComponent from '../components/Register/RegisterComponent'

function Register() {
    const [formRegister, setFormRegister] = useState({});

    const handleChangeFormRegister = (e) => {
        const { name, value } = e.target;
    
        setFormRegister({
          ...formRegister,
          [name]: value,
        });
      };
    
      const handleRegister = () => {
        axios.post(`${BaseUrl}register`, formRegister, axiosConfig).then((res) => {
          toast.success("Register Berhasil");
          setTimeout(() => {
          }, 2000);
        });
      };
    return (
        <RegiserComponent handleChangeFormRegister={null} handleRegister={null}/>
    )
}

export default Register
