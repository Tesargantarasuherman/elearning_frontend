import React from 'react'
import './UserCommponent.css'
import imgProfile from '../../images/male.png'
function UserComponent() {
    return (
        <div className='user-component'>
            <div>
                <div className="user-description">
                    <img src={imgProfile} alt="" />
                    <div>
                        <p>Tesar Gantara Suherman</p>
                        <p>Fullstack Developer</p>
                    </div>
                </div>
                <div className="user-menu">
                    <ul>
                        <li>My Course</li>
                        <li>Profile</li>
                        <li>Logout</li>
                    </ul>
                </div>

            </div>
            <div className="right">
                right
            </div>
        </div>
    )
}

export default UserComponent
