import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ClassCourse from '../components/ClassCourse/ClassCourse'
import BaseUrl from "../utils/BaseUrl";

function Course() {
    const [dataCourse, setDataCourse] = useState([]);

    useEffect(() => {
      setTimeout(() => {        
        axios.get(`${BaseUrl}kursus`).then((res) => {
          setDataCourse(res.data.data);
        });
      }, 3000);
    }, []);
    return (
        <ClassCourse dataCourse={dataCourse}/>
    )
}

export default Course
