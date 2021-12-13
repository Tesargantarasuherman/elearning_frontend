import React from 'react'
import './LearningPath.css'
import imgLearningPath from '../../images/Rectangle 12-2.png'
function LearningPath() {
    return (
        <div className='learning-path'>
            <h1>Core practice learning language</h1>
            <div className="learning-path-body-card">
                <div className="learning-path-card">
                    <img src={imgLearningPath} alt="" />
                    <label>Lorem</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nam.</p>
                </div>
                <div className="learning-path-card">
                    <img src={imgLearningPath} alt="" />
                    <label>Lorem</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nam.</p>
                </div>
                <div className="learning-path-card">
                    <img src={imgLearningPath} alt="" />
                    <label>Lorem</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nam.</p>
                </div>
            </div>
        </div>
    )
}

export default LearningPath
