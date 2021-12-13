import React from 'react'
import './ClassCourse.css'
import imgClassCourse from '../../images/Rectangle 12-5.png'
export default function ClassCourse() {
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
                <div className="card-class-course">
                    <img src={imgClassCourse} alt="" />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, facere!</p>
                    <button>Selengkapnya</button>
                </div>
                <div className="card-class-course">
                    <img src={imgClassCourse} alt="" />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, facere!</p>
                    <button>Selengkapnya</button>
                </div>
                <div className="card-class-course">
                    <img src={imgClassCourse} alt="" />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, facere!</p>
                    <button>Selengkapnya</button>
                </div>
            </div>
        </div>
    )
}
