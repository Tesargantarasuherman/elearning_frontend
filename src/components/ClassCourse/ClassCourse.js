import React from 'react'
import './ClassCourse.css'
import imgClassCourse from '../../images/Rectangle 12-5.png'
import { useHistory } from "react-router";

export default function ClassCourse(props) {
    let history = useHistory();
    return (
        <div className='class-course'>
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
            <div className="data-class-course">
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
                                    <button onClick={() => history.push('/course/detail')} >
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
