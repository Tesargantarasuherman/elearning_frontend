import axios from 'axios';
import CoursePlayingComponent from '../components/CoursePlayingComponent/CoursePlayingComponent'
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import BaseUrl from "../utils/BaseUrl";
import API from '../services';
import { connect } from 'react-redux'
import { getCoursePlaying, validationUser } from '../actions';

export const CoursePlaying = (props) => {
    // const defaultData = {
    //     status: "ok",
    //     toResult: 0,
    //     totalResult: 0,
    //     articles: [],
    // };
    let { id } = useParams();
    // let id_ = { id }
    // const [open, setOpen] = useState(false)
    // const [state, setstate] = useState({ activeItem: null });
    // const [data_class, setdata_class] = useState([]);
    // const [materi, setmateri] = useState({});
    // const { login, setLogin } = useContext(props.user);
    // const [tandaiselesai, settandaiselesai] = useState({ 'user_id': null }, { 'kursus_id': null }, { 'kelas_id': null, 'materi_id': null });
    // const [terakhirdilihat, setterakhirdilihat] = useState({});

    // const [stateData, setstateData] = useState(defaultData);
    // const [page, setPage] = useState(1);
    // const [isLoading, setLoading] = useState(false);
    // const [isRefresh, setRefresh] = useState(false);
    // const [rating, setrating] = useState({ 'rating': null }, { 'user_id': null }, { 'kursus_id': null }, { 'review': null })

    // const [formKomentar, setFormKomentar] = useState({
    //     user_id: "",
    //     materi_id: "",
    //     kursus_id: "",
    //     kelas_id: "",
    //     isi_komentar: "",
    // });

    // const axiosConfig = {
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": `bearer ${login ? login.token : ""}`,
    //     },
    // };

    // const handleRefresh = () => {
    //     setstateData(defaultData);
    //     setPage(1);
    //     setLoading(false);
    //     setRefresh(false);
    // };
    // const handleItemClick = (_materi, row) => {
    //     handleRefresh();
    //     setstate({ activeItem: _materi.judul });
    //     setmateri(_materi);
    //     settandaiselesai({
    //         'user_id': `${login.data.id}`,
    //         'kursus_id': `${id_.id}`,
    //         'kelas_id': `${_materi.kelas_id}`,
    //         'materi_id': `${_materi.id}`,
    //     })

    //     updateLastWatch(_materi)
    // };

    // const updateLastWatch = (_materi) => {
    //     axios.post(`${BaseUrl}update-terakhir-ditonton/${login.data.id}/${id}`, ({
    //         'kelas_id': `${_materi.kelas_id}`,
    //         'materi_id': `${_materi.id}`,
    //     }), axiosConfig).then(res => {
    //         getLastWatch()
    //     })
    // }

    useEffect(() => {
        // getLastWatch();
        props.validationUser();
        setTimeout(() => {
            props.getCoursePlaying(id);
        }, 1000);
        console.log(props.courses)
    }, []);

    // useEffect(() => {
    //     getKursus();
    //     getKomentar();

    // }, [page, isRefresh, materi]);

    // const getKursus = () => {
    //     API.getCoursePlaying(id, login.data.id, axiosConfig).then(result => {
    //         setdata_class(result.data.data_kelas);
    //     })
    // };
    // const getLastWatch = () => {
    //     axios
    //         .get(`${BaseUrl}terakhir-ditonton/${login.data.id}/${id}`, axiosConfig)
    //         .then((res) => {
    //             console.log(res.data.data.history[0])
    //             setterakhirdilihat(res.data.data.history[0]);
    //             setMateriOnload(res.data.data.history[0]);
    //         });
    // };
    // const setMateriOnload = (data) => {
    //     setmateri(data)
    //     getKomentar(data)
    // }
    // const getKomentar = (data) => {
    //     axios
    //         .get(
    //             `${BaseUrl}komentar/${id}/${data ? data.kelas_id : materi.kelas_id}/${data ? data.materi_id : materi.id}?page=${page}`
    //         )
    //         .then((result) => {
    //             setstateData(() => {
    //                 return {
    //                     ...result,
    //                     articles: [...result.data.data.data],
    //                     toResult: result.data.data.to,
    //                     totalResult: result.data.data.total,
    //                     status: result.status,
    //                 };
    //             });
    //         });
    // };
    // const handleFormKomentar = (e) => {
    //     const { name, value } = e.target;
    //     setFormKomentar({
    //         ...formKomentar,
    //         [name]: value,
    //         user_id: `${login.data.id}`,
    //         materi_id: `${materi.id}`,
    //         kursus_id: id,
    //         kelas_id: `${materi.kelas_id}`,
    //     });
    // };
    // const submitKomentar = (e) => {
    //     e.preventDefault()
    //     axios
    //         .post(`${BaseUrl}add-komentar`, formKomentar, axiosConfig)
    //         .then((res) => {
    //             setFormKomentar({
    //                 ...formKomentar,
    //                 isi_komentar: "",
    //             });
    //         });
    //     getKomentar();
    // };
    // // Tandai Selesai
    // const selesaiKursus = () => {
    //     axios
    //         .post(`${BaseUrl}add-kelas-selesai`, tandaiselesai, axiosConfig)
    //         .then((res) => {
    //             getLastWatch();
    //         });
    // }
    // const handleFormChangeReview = (e) => {
    //     const { name, value } = e.target;
    //     setrating({
    //         ...rating,
    //         [name]: value,
    //         user_id: `${login.data.id}`,
    //         kursus_id: id,
    //     });
    //     console.log(rating)
    // };
    // const addRating = (e) => {
    //     e.preventDefault()
    //     axios
    //         .post(`${BaseUrl}add-rating-kursus`, rating, axiosConfig)
    //         .then((res) => {
    //             setrating({
    //                 ...rating,
    //                 rating: "",
    //                 review: ""
    //             })
    //             console.log(res)
    //         }).catch(err => {
    //             setrating({
    //                 ...rating,
    //                 rating: "",
    //                 review: ""
    //             })
    //         })
    // }
    return (
        <div>
            <CoursePlayingComponent
                data_class={props?.courses}
                // login={login}
                // handleItemClick={handleItemClick}
                // materi={materi}
                // stateData={stateData}
                // handleFormKomentar={handleFormKomentar}
                // submitKomentar={submitKomentar}
                // formKomentar={formKomentar}
                // page={page}
                // setPage={setPage}
                // isLoading={isLoading}
                // selesaiKursus={selesaiKursus}
                // terakhirdilihat={terakhirdilihat}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    user:state.auth?.data_user,
    courses: state.course?.courses?.data?.data_kelas
})

const mapDispatchToProps = {
    getCoursePlaying,
    validationUser
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePlaying)


