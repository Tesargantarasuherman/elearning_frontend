import React from 'react'
import './MyCourse.css'
import imgClassCourse from '../../images/Rectangle 12-5.png'

function MyCourse() {
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
                <div className="row-my-course">
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
                            <button onClick={null} >
                                <span className='price'>Rp. 20.000</span>
                                <span className='next'>Selengkapnya</span>
                            </button>
                        </div>
                    </div>
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
                            <button onClick={null} >
                                <span className='price'>Rp. 20.000</span>
                                <span className='next'>Selengkapnya</span>
                            </button>
                        </div>
                    </div>
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
                            <button onClick={null} >
                                <span className='price'>Rp. 20.000</span>
                                <span className='next'>Selengkapnya</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCourse
