import React from 'react'
import './LearningPath.css'
import imgLearningPath2 from '../../images/success.png'
import imgLearningPath1 from '../../images/done.png'
import imgLearningPath from '../../images/excellent.png'
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { connect } from 'react-redux'

export const LearningPath = (props) => {

    return (
        <div className={`learning-path ${props.theme.theme == 'dark' ? 'dark' : ''} `}>
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

const mapStateToProps = (state) => ({
    theme: state.theme
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LearningPath)
