import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { AuthContext } from "../context/AuthContext";
import BaseUrl from "../utils/BaseUrl";
import axiosConfig from "../utils/Config";

function User() {
  const [state, setstate] = useState([]);
  const { login, setLogin } = useContext(AuthContext);
  const [active, setactive] = useState({'active':'profile'})

  let { id } = useParams();
  useEffect(() => {
    axios.get(`${BaseUrl}profile/${id}`, axiosConfig).then((res) => {
      setstate(res.data.data[0]);
    });
  }, []);
  return (
    <div className="d-flex">
      <div class="d-flex justify-content-around w-100">
        <div className="sidebar-user-left mx-2">
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            className="mx-auto d-block br-50 my-2"
            width={80}
            height={80}
            alt="..."
          />
          <div className="px-4">
            <div className="user-descripton">
              <p className="font-weight-bold">Tesar Gantara Suherman</p>
              <p className="">Fullstack Developer</p>
            </div>
            <div className="user-menu mt-4">
              <p className="font-weight-bold" onClick={null}>Profile Saya</p>
              <p className="font-weight-bold">Kelas Saya</p>
            </div>
          </div>
        </div>
        <div className="sidebar-user-right">
      {
        active.active == "profile" ?(
         '
        ):(
          'lain'
        )
      }
        </div>
      </div>
    </div>
  );
}

export default User;
