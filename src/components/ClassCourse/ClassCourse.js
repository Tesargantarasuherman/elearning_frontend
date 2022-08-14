import React, { useEffect } from 'react'
import './ClassCourse.css'
import imgClassCourse from '../../images/Rectangle 12-5.png'
import { useNavigate } from "react-router-dom";
import Skeleton from '../_components/Skeleton';
import { connect } from 'react-redux'
import { getAllCourses, validationUser } from '../../actions';

export const ClassCourse = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        props.validationUser()
        setTimeout(() => {
            props.getAllCourses()
        }, 5000);
    }, []);

    const renderCourses = () => {
        if (props?.courses?.length >= 1) {
            return (
                <>
                    <div className={`data-class-course ${props.theme == 'dark' ? 'dark' : ''}`}>
                        {props?.courses?.map(course => {
                            return (
                                <div>
                                    <div className='type-class-course'>
                                        Premium
                                    </div>
                                    <img src={imgClassCourse} alt="" />
                                    <div>
                                        <h3>Lorem, ipsum dolor.</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, facere!</p>
                                    </div>
                                    <div>
                                        <button onClick={() => navigate(`/course/detail/${course.id_kursus}`)} >
                                            <span className='price'>Rp. 20.000 </span>
                                            <span className='next'>Selengkapnya</span>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </>
            )
        }
        else {
            return(
            <div className='loader'>
                <Skeleton />
            </div>
            )
        }
    }

    return (
        <div className={`class-course  ${props.theme == 'dark' ? 'dark' : ''}`}>
            <h1>Katalog Kelas</h1>
            <p>Persiapkan Dirimu untuk Bekerja Di jepang</p>
            <div className="input-group">
                <input type="text" />
                <button>Search</button>
            </div>
            <h1>Kategori Kelas</h1>
            <div className="btn-category-class">
                <button>All</button>
                <button className='active'>Free</button>
                <button>Premium</button>
            </div>
            {renderCourses()}
        </div>
    )
}

const mapStateToProps = (state) => ({
    theme: state.theme.theme,
    courses: state.course?.courses?.data
})

const mapDispatchToProps = {
    getAllCourses,
    validationUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassCourse)

