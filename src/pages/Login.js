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
 

  return (
    <LoginComponent />
  );
}
export default Login;