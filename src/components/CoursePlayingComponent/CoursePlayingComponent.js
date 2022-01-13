import React, { useEffect, useState } from 'react'
import './CoursePlayingComponent.css'
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
function CoursePlayingComponent(props) {
    const { theme, setTheme } = useContext(ThemeContext);
    const [togleNav, settogleNav] = useState(false)
    const [state, setstate] = useState('https://www.youtube.com/embed/JR9wsVYp8RQ')
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
                                                <li><button >
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
            <div className={`${togleNav ? 'hide' : ''} right`}>
                <iframe
                    width={"100%"}
                    height={700}
                    src={`https://www.youtube.com/embed/JR9wsVYp8RQ`}

                ></iframe>
                <h1>1{state.duration}</h1>
            </div>
        </div>
    )
}

export default CoursePlayingComponent
