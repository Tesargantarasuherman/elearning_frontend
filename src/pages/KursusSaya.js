import axios from "axios";
import React, { useEffect, useState,useContext } from "react";
import RowClass from "../components/RowClass";
import { useParams } from "react-router-dom";
import BaseUrl from "../utils/BaseUrl";
import { AuthContext } from "../context/AuthContext";

function KursusSaya() {
  const { login, setLogin } = useContext(AuthContext);
  let id  = login.data.id;
  const [ dataClass, setDataClass ] = useState([]);
  useEffect(() => {
    axios.get(`${BaseUrl}kursus-saya/${id}`).then((res) => {
      setDataClass(res.data.data);
    });
  }, []);
  
  return (
    <div className='container'>
      <RowClass dataClass={dataClass} url={'my-class'} text_button={'Mulai Belajar'} />
    </div>
  );
}

export default KursusSaya;
