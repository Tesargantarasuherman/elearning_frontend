import React from 'react'
import './ClassCourse.css'
import imgClassCourse from '../../images/Rectangle 12-5.png'
import { useNavigate } from "react-router-dom";
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
 function ClassCourse(props) {
    const navigate = useNavigate();
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className={`class-course ${theme == 'dark' ? 'dark' : ''} `}>
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
            <div className={`data-class-course ${theme == 'dark' ? 'dark' : ''} `}>
                {
                    props.dataCourse.map(course => {
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
                                    <button onClick={() => navigate('/detail')} >
                                        <span className='price'>Rp. 20.000</span>
                                        <span className='next'>Selengkapnya</span>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ClassCourse;
