import React, { useEffect, useState } from 'react'
import './CoursePlayingComponent.css'
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import Commentar from './Commentar/Commentar.jsx';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

function CoursePlayingComponent(props) {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(localStorage.getItem("lang"));
    const { theme, setTheme } = useContext(ThemeContext);
    const [togleNav, settogleNav] = useState(false)
    useEffect(() => {

    }, [])
    const toggleBtn = () => {
        settogleNav(!togleNav)
    }
    function actionSetLang() {
        i18n.changeLanguage(lang);
    }
    function handleClick(_lang) {
        localStorage.setItem("lang", _lang)
        setLang(_lang)
    }
    const setThemeAction = () => {
        if (theme == "dark") {
            setTheme("light");
        }
        else {
            setTheme("dark");
        }
    }
    return (
        <div className={`body-course-playing ${theme == 'dark' ? 'dark' : ''} `}>
            <div className={`${togleNav ? 'hide' : ''} left `}>
                <div className="body-btn-toggle">
                    <button className="btn-toggle" onClick={() => navigate(`/user`)}>
                        <ion-icon name="return-up-back-outline"></ion-icon>
                    </button>
                    <select value={lang} onChange={(e) => handleClick(e.target.value)}>
                        <option value="id">Indonesia</option>
                        <option value="en">English</option>
                    </select>
                    {
                        theme == 'dark' ? (<label className="switch">
                            <input type="checkbox" onClick={setThemeAction} checked />
                            <span className="slider round"></span>
                        </label>)
                            : (<label className="switch">
                                <input type="checkbox" onClick={setThemeAction} />
                                <span className="slider round"></span>
                            </label>)
                    }
                    <button className="btn-toggle" onClick={toggleBtn}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>
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
                                                <li>
                                                    <button onClick={() => props.handleItemClick(materi, row)} className={`${props.terakhirdilihat.judul == materi.judul ? 'play-active' : ''} `}>
                                                        <p>{materi.judul}</p>
                                                        {materi.kelas_selesai.map(kelas_selesai => {
                                                            return (
                                                                kelas_selesai.user_id == props.login.data.id ? <ion-icon name="checkmark-circle-outline"></ion-icon> : '')
                                                        })}
                                                    </button>
                                                </li>
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
                    className='class-player'
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
