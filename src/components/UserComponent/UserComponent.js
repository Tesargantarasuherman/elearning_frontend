import React, { useEffect, useState } from 'react'
import './UserCommponent.css'
import imgProfile from '../../images/male.png'
import MyCourse from '../MyCourse/MyCourse'
import Profile from '../Profile/Profile'
function UserComponent(props) {
    const [togleNav, settogleNav] = useState(false)
    const [active, setactive] = useState({ active: "myCourse" });
    useEffect(() => {

    }, [])
    const toggleBtn = () => {
        settogleNav(!togleNav)
    }
    const renderSwitch = (activeItem) => {
        switch (activeItem) {
            case "profile":
                return (
                    <Profile data_user={props.data_user} />
                );
            case "myCourse":
                return (
                    <MyCourse />
                );
            default:
                return (
                    <Profile />
                );
        }
    };
    return (
        <>
            <button onClick={toggleBtn}>=</button>
            <div className='user-component'>
                <div className={`${togleNav ? 'back' : ''} left `}>
                    <div className="user-description">
                        <img src={imgProfile} alt="" />
                        <div>
                            <p>Tesar Gantara Suherman</p>
                            <p>Fullstack Developer</p>
                        </div>
                    </div>
                    <div className="user-menu">
                        <ul>
                            <li onClick={() => setactive({ active: "myCourse" })}>My Course</li>
                            <li onClick={() => setactive({ active: "profile" })}>Profile</li>
                            <li>Logout</li>
                        </ul>
                    </div>

                </div>
                <div className="right">
                    {renderSwitch(active.active)}
                </div>
            </div>
        </>
    )
}

export default UserComponent
