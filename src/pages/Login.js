import React, { useEffect} from "react";
import LoginComponent from "../components/Login/LoginComponent";
import { useNavigate } from "react-router-dom";

import { connect } from 'react-redux'

export const Login = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    middleWare(props.isSignedIn)
  }, [props.isSignedIn])

  const middleWare = (param) => {
    if (param == true) {
      navigate('/user')
    }
  }
  return (
    <LoginComponent />
  )
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
