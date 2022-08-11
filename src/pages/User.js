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
  return (
    <>
      <UserComponent />
    </>
  );
}

export default User;
