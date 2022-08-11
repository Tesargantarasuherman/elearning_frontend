import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import Profile from "../components/Profile";
import { AuthContext } from "../context/AuthContext";
import BaseUrl from "../utils/BaseUrl";
// import KursusSaya from "./KursusSaya";
import { useTranslation } from 'react-i18next';
import UserComponent from "../components/UserComponent/UserComponent";

import { connect } from 'react-redux'
import { validationUser } from "../actions";

export const User = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    middleWare(props.isSignedIn)
  }, [props.isSignedIn])

  const middleWare = (param) => {
    if (param == false) {
      navigate('/login')
    }
  }
  return (
    <UserComponent />
  )
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn
})

const mapDispatchToProps = {
  validationUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(User)


