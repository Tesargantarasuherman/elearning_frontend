import React, { useContext } from 'react'
import './CourseDetailComponent.css'
import LogoUserRating from '../../images/male.png'
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import { getDetailCourse } from '../../actions';
import { useEffect } from 'react';


export const CourseDetailComponent = (props) => {
    const navigate = useNavigate();
  
    useEffect(()=>{
        props.getDetailCourse(1)
        console.log(props)
    },[])

    return (
        <>
            <div className={`course-detail ${props.theme == 'dark' ? 'dark' : ''} `}>
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
                    <div className={`benefit-course-detail ${props.theme == 'dark' ? 'dark' : ''} `}>
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
                        <button onClick={() => navigate('/course/checkout/1')}>Beli Sekarang</button>
                    </div>
                </div>
            </div>

        </>
    )
}

const mapStateToProps = (state) => ({
    theme:state.theme.theme
})

const mapDispatchToProps = {
    getDetailCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailComponent)

