import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import Profile from "../components/Profile";
import { AuthContext } from "../context/AuthContext";
import BaseUrl from "../utils/BaseUrl";
import KursusSaya from "./KursusSaya";
import { useTranslation } from 'react-i18next';
import UserComponent from "../components/UserComponent/UserComponent";

function User() {
  const { t, i18n } = useTranslation();
  const [state, setstate] = useState([]);
  const { login, setLogin } = useContext(AuthContext);
  const [active, setactive] = useState({ active: "kelas_saya" });

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${login ? login.token : ""}`,
    },
  };

  let id = login.data.id;
  useEffect(() => {
    axios.get(`${BaseUrl}profile/${id}`, axiosConfig).then((res) => {
      console.log(res.data.data[0])
      setstate(res.data.data[0]);
    });
  }, []);
  const renderSwitch = (activeItem) => {
    switch (activeItem) {
      case "profile":
        return (
          <Profile state={state} />
        );
      case "kelas_saya":
        return (
          <KursusSaya />
        );
      default:
        return (
          <Profile state={state} />
        );
    }
  };
  return (
    <>
      <UserComponent />
    </>
    // <div className="d-flex">
    //   <div class="d-flex justify-content-around w-100">
    //     <div className="sidebar-user-left mx-2">
    //       <img
    //         src="https://kerma.widyatama.ac.id/wp-content/uploads/2021/05/blank-profile-picture-973460_1280.png"
    //         className="mx-auto d-block br-50 my-2"
    //         width={80}
    //         height={80}
    //         alt="..."
    //       />
    //       <div className="px-4">
    //         <div className="user-descripton">
    //           <p className="font-weight-bold text-center  label">{state.nama}</p>
    //           <p className="text-center label">Programmer</p>
    //         </div>
    //         <hr/>
    //         <div className="user-menu mt-4">
    //           <p className="font-weight-bold label label-menu-user" onClick={() => setactive({ active: "profile" })}>
    //             {t('User.1')}
    //           </p>
    //           <p className="font-weight-bold label label-menu-user" onClick={() => setactive({ active: "kelas_saya" })}>
    //           {t('User.2')}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="sidebar-user-right">
    //       {renderSwitch(active.active)}
    //     </div>
    //   </div>
    // </div>
  );
}

export default User;
