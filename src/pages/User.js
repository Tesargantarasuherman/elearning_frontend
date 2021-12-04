import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import Profile from "../components/Profile";
import { AuthContext } from "../context/AuthContext";
import BaseUrl from "../utils/BaseUrl";
import axiosConfig from "../utils/Config";
import KursusSaya from "./KursusSaya";

function User() {
  const [state, setstate] = useState([]);
  const { login, setLogin } = useContext(AuthContext);
  const [active, setactive] = useState({ active: "lain" });

  const render =()=>{
    switch (active) {
      case 'profile': return (
          <Profile/>
      )
      case 'kurang': return(
        'null'
      )
      default:
          return <Profile/>
    }
  }

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
            src="https://kerma.widyatama.ac.id/wp-content/uploads/2021/05/blank-profile-picture-973460_1280.png"
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
              <p
                className="font-weight-bold"
                onClick={() => setactive({ active: "profile" })}
              >
                Profile Saya
              </p>
              <p
                className="font-weight-bold"
                onClick={() => setactive({ active: "kelas_saya" })}
              >
                Kelas Saya
              </p>
            </div>
          </div>
        </div>
        <div className="sidebar-user-right">
          {active.active == "profile" ? <Profile /> : <KursusSaya/>}
        </div>
      </div>
    </div>
  );
}

export default User;
