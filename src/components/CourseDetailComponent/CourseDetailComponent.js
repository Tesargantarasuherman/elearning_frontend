import React, { useContext } from 'react'
import './CourseDetailComponent.css'
import LogoUserRating from '../../images/male.png'
import { useHistory } from "react-router";
import { ThemeContext } from '../../context/ThemeContext';

function CourseDetailComponent() {
    let history = useHistory();
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <>
            <div className={`course-detail ${theme == 'dark' ? 'dark' : ''} `}>
                <div className="left">
                    <div className='course-detail-title'>
                        <h1>React - The Complete Guide (incl Hooks, React Router, Redux)</h1>
                        <p>React - The Complete Guide (incl Hooks, React Router, Redux)</p>
                        <p>Pengajar</p>
                        <div>
                            <p>200.000 Peserta</p>
                            <div className='rating-star-course'>
                                <span class="lnr lnr-star"></span>
                                <span class="lnr lnr-star"></span>
                                <span class="lnr lnr-star"></span>
                                <span class="lnr lnr-star"></span>
                                <span class="lnr lnr-star"></span>
                                <span > (433) </span>
                            </div>
                        </div>
                    </div>
                    <div className={`benefit-course-detail ${theme == 'dark' ? 'dark' : ''} `}>
                        <h1>Yang Akan Anda Pelajari</h1>
                        <p><span class="lnr lnr-thumbs-up"></span> Lorem, ipsum dolor.</p>
                        <p><span class="lnr lnr-thumbs-up"></span> Lorem ipsum dolor sit.</p>
                        <p><span class="lnr lnr-thumbs-up"></span> Lorem, ipsum dolor.</p>
                    </div>
                </div>
                <div className="right">
                    <div className="card-course-detail-component">
                        <img src="https://class.buildwithangga.com/storage/assets/thumbnails/thumbnail%20kelas%203d%20design%20blender%20buildwith%20angga.png" alt="" />
                        <h1>Rp.700.000</h1>
                        <button onClick={() => history.push('/course/checkout')}>Beli Sekarang</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CourseDetailComponent
