import React, { useEffect, useState, useContext } from 'react'
import './UserCommponent.css'
import imgProfile from '../../images/male.png'
import MyCourse from '../MyCourse/MyCourse'
import Profile from '../Profile/Profile'
import { ThemeContext } from '../../context/ThemeContext';

function UserComponent(props) {
    const { theme, setTheme } = useContext(ThemeContext);
    const [togleNav, settogleNav] = useState(false)
    const [active, setactive] = useState({ active: null });
    const [url, setUrl] = useState('')
    useEffect(() => {
        let uri_ = window.location.href;
        let _uri = [];
        _uri = uri_.split('#')
        setactive({ active: _uri[1] });
    }, [])

// 
    const toggleBtn = () => {
        settogleNav(!togleNav)
    }
    const renderSwitch = (active) => {
        switch (active) {
            case "profile":
                return (
                    <Profile data_user={props.data_user} />
                );
            case "course":
                return (
                    <MyCourse />
                );
            default:
                return (
                    <MyCourse />
                );
        }
    };
    return (
        <>
            <button onClick={toggleBtn}>=</button>
            <div className={`user-component ${theme == 'dark' ? 'dark' : ''} `}>
                <div className={`${togleNav ? 'back' : ''} left `}>
                    <div className="user-description">
                        <img src={imgProfile} alt="" />
                        <div>
                            <p>Tesar Gantara Suherman</p>
                            <p>{url}</p>
                        </div>
                    </div>
                    <div className="user-menu">
                        <ul>
                            <li onClick={() => setactive({ active: "course" })} className={`${active.active =='course' ? 'active':''}`}><a href="#course">My Course</a> </li>
                            <li onClick={() => setactive({ active: "profile" })} className={`${active.active =='profile' ? 'active':''}`}><a href="#profile">Profile</a> </li>
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
