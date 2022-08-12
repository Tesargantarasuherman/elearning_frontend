import React, { useContext } from 'react'
import '../components/CourseDetailComponent/CourseDetailComponent.css'
// import LogoUserRating from '../../images/male.png'
import { useNavigate, useParams } from "react-router-dom";
import { connect } from 'react-redux'
import { useEffect } from 'react';
import { getDetailCourse } from '../actions';


export const CourseDetail = (props) => {
    const navigate = useNavigate();
    let params = useParams();

    useEffect(() => {
        props.getDetailCourse(params.id)
        console.log(props.course);
    }, [])



    return (
        <>
            {
                !props.course ?
                    (
                        <div>Loading...</div>

                    ) :
                    (
                        <div className={`course-detail ${props.theme == 'dark' ? 'dark' : ''} `}>
                            <div className="left">
                                <div className='course-detail-title'>
                                    <h1>{props.course.nama_kursus}</h1>
                                    <p>{props.course.tipe_kursus}</p>
                                    <p>{props.course.nama_instruktur}</p>
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
                                    <h1>{props.course.harga}</h1>
                                    <button onClick={() => navigate('/course/checkout/1')}>Beli Sekarang</button>
                                </div>
                            </div>
                        </div>
                    )
            }


        </>
    )
}

const mapStateToProps = (state) => ({
    theme: state.theme.theme,
    course: state.course?.courses?.data?.[0]
})

const mapDispatchToProps = {
    getDetailCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail)

