import React from 'react'
import './MyCourse.css'
import imgClassCourse from '../../images/Rectangle 12-5.png'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useNavigate } from "react-router-dom";

function MyCourse({courseActive}) {
    const navigate = useNavigate();
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className='my-course'>
            <div className="my-course-header">
                <label>My Course</label>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod fugit aliquam minima placeat nam veritatis beatae soluta, excepturi voluptatem velit!</p>
            </div>
            <div className="my-course-body">
                <div className="btn-type-my-course">
                    <button>
                        lorem
                    </button>
                    <button className="active-course">
                        lorem
                    </button>
                    <button>
                        lorem
                    </button>
                </div>
                <div className={`row-my-course ${theme == 'dark' ? 'dark' : ''} `}>
                    {
                        courseActive.map(active => {
                            return (
                                <div>
                                    <div className='type-class-course'>
                                    {active.tipe_kursus}
                                    </div>
                                    <img src={imgClassCourse} alt="" />
                                    <div>
                                        <h3>{active.nama_kursus}.</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, facere!</p>
                                    </div>
                                    <div>
                                        <button  onClick={() => navigate(`/course/playing/${active.id_kursus}`)} >
                                            <span className='price'>Lanjutkan Belajar</span>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MyCourse
