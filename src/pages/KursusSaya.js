import axios from "axios";
import React, { useEffect, useState } from "react";
import RowClass from "../components/RowClass";
import { useParams } from "react-router-dom";

function KursusSaya() {
  let { id } = useParams();
  const [ dataClass, setDataClass ] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/kursus-saya/${id}`).then((res) => {
      setDataClass(res.data.data);
    });
  }, []);
  return (
    <div className='container'>
      <RowClass dataClass={dataClass} url={'my-class'} />
    </div>
  );
}

export default KursusSaya;
