import React, { useEffect, useState } from 'react'
import './CoursePlayingComponent.css'
function CoursePlayingComponent() {
    const [togleNav, settogleNav] = useState(false)
    useEffect(() => {

    }, [])
    const toggleBtn = () => {
        settogleNav(!togleNav)
    }
    return (
        <div className='body-course-playing'>
            <div className={`${togleNav ? 'hide' : ''} left `}>
                <div className="body-btn-toggle">
                    <button className="btn-toggle" onClick={toggleBtn}>X</button>
                </div>
                <div className={`${togleNav ? 'hide' : ''} list-playing`}>
                    <label>Lorem, ipsum.</label>
                    <ul>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                    </ul>
                    <label>Lorem, ipsum.</label>
                    <ul>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                    </ul>
                    <label>Lorem, ipsum.</label>
                    <ul>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                    </ul>
                    <label>Lorem, ipsum.</label>
                    <ul>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                    </ul>
                    <label>Lorem, ipsum.</label>
                    <ul>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                    </ul>
                    <label>Lorem, ipsum.</label>
                    <ul>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                    </ul>
                    <label>Lorem, ipsum.</label>
                    <ul>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                    </ul>
                    <label>Lorem, ipsum.</label>
                    <ul>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                    </ul>
                    <label>Lorem, ipsum.</label>
                    <ul>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                    </ul>
                    <label>Lorem, ipsum.</label>
                    <ul>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                    </ul>
                    <label>Lorem, ipsum.</label>
                    <ul>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                    </ul>
                    <label>Lorem, ipsum.</label>
                    <ul>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                    </ul>
                    <label>Lorem, ipsum.</label>
                    <ul>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                    </ul>
                    <label>Lorem, ipsum.</label>
                    <ul>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                        <li><button>Lorem, ipsum.</button></li>
                    </ul>
                </div>
            </div>
            <div className={`${togleNav ? 'hide' : ''} right`}>
                <iframe
                    width={"100%"}
                    height={700}
                    src={`https://www.youtube.com/embed/JR9wsVYp8RQ`}

                ></iframe>
            </div>
        </div>
    )
}

export default CoursePlayingComponent
