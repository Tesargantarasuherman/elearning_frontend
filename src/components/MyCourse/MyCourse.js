import React from 'react'
import './MyCourse.css'
import imgClassCourse from '../../images/Rectangle 12-5.png'

import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'

export const MyCourse = (props) => {
    const navigate = useNavigate();

    return (
        <div className={`my-course ${props.theme == 'dark' ? 'dark' : ''} ${props.sidebar ?'back':''}`}>
            <div className="my-course-header">
                <label>My Course</label>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod fugit aliquam minima placeat nam veritatis beatae soluta, excepturi voluptatem velit!</p>
            </div>
            <div className="my-course-body">
                <div className="btn-type-my-course">
                    <button>
                        Menunggu Pembayaran
                    </button>
                    <button className="active-course">
                        Kursus aktif
                    </button>
                </div>
                <div className={`row-my-course ${props.theme == 'dark' ? 'dark' : ''} `}>
                    <div>
                        <div className='type-class-course'>
                            TYPE
                        </div>
                        <img src={imgClassCourse} alt="" />
                        <div>
                            <h3>NAMA KURSUS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, facere!</p>
                        </div>
                        <div>
                            <button onClick={() => navigate(`/course/playing/1`)} >
                                <span className='price'>Lanjutkan Belajar</span>
                                <span className='next'>Ke Kursus</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    theme: state.theme.theme,
    language: state.language.language,
    isSignedIn: state.auth.isSignedIn,
    sidebar:state.sidebar.sidebar

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MyCourse)

