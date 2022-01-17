import React, { useEffect, useState } from 'react'
import './CoursePlayingComponent.css'
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import Commentar from './Commentar/Commentar.jsx';
function CoursePlayingComponent(props) {
    const { theme, setTheme } = useContext(ThemeContext);
    const [togleNav, settogleNav] = useState(false)
    useEffect(() => {

    }, [])
    const toggleBtn = () => {
        settogleNav(!togleNav)
    }
    return (
        <div className={`body-course-playing ${theme == 'dark' ? 'dark' : ''} `}>
            <div className={`${togleNav ? 'hide' : ''} left `}>
                <div className="body-btn-toggle">
                    <button className="btn-toggle" onClick={toggleBtn}>X</button>
                </div>
                <div className={`${togleNav ? 'hide' : ''} list-playing`}>
                    {
                        props.data_class.map((clas, row) => {
                            return (
                                <>
                                    <label>{clas.judul}</label>
                                    <ul>
                                        {clas.materi.map((materi, row) => {
                                            return (
                                                <li><button onClick={() => props.handleItemClick(materi, row)}>
                                                    {materi.judul}
                                                    {materi.kelas_selesai.map(kelas_selesai => {
                                                        return (
                                                            kelas_selesai.user_id == props.login.data.id ? <ion-icon name="checkmark-circle-outline"></ion-icon> : '')
                                                    })}</button></li>
                                            )
                                        })}
                                    </ul>
                                </>
                            )
                        })}
                </div>
            </div>
            <div className={`${togleNav ? 'hide' : ''} right ${theme == 'dark' ? 'dark' : ''} `}>
                <div className="header-player">
                    <h1>{props.materi.judul}</h1>
                    <button onClick={props.selesaiKursus}>Tandai Selesai</button>
                </div>

                <iframe
                    width={"100%"}
                    height={700}
                    src={`https://www.youtube.com/embed/${props.materi.link_video}`}

                ></iframe>
                <Commentar
                    handleFormKomentar={props.handleFormKomentar}
                    submitKomentar={props.submitKomentar}
                    formKomentar={props.formKomentar}
                    isiKomentar={props.stateData.articles}
                    lengthKomentar={props.stateData.articles.length}
                    totalResult={props.stateData.totalResult}
                    toResult={props.stateData.toResult}
                    page={props.page}
                    setPage={props.setPage}
                    isLoading={props.isLoading}
                    theme={theme}
                />
            </div>
        </div>
    )
}

export default CoursePlayingComponent
