import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import Profile from "../components/Profile";
import { AuthContext } from "../context/AuthContext";
import BaseUrl from "../utils/BaseUrl";
// import KursusSaya from "./KursusSaya";
import { useTranslation } from 'react-i18next';
import UserComponent from "../components/UserComponent/UserComponent";

function User() {
  const { t, i18n } = useTranslation();
  const [state, setstate] = useState([]);
  const [courseActive, setCourseActive] = useState([]);
  const { login, setLogin } = useContext(AuthContext);

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${login ? login.token : ""}`,
    },
  };

  let id = login.data.id;
  useEffect(() => {
    getMyProfile()
    getMyCourse()
  }, []);
  const getMyProfile =()=>{
    axios.get(`${BaseUrl}profile/${id}`, axiosConfig).then((res) => {
      setstate(res.data.data[0]);
    });
  }
  const getMyCourse = () => {
    axios.get(`${BaseUrl}kursus-saya/${id}`).then((res) => {
      setCourseActive(res.data.data);
    });
  }
  return (
    <>
      <UserComponent data_user={state} courseActive={courseActive} />
    </>
  );
}

export default User;
