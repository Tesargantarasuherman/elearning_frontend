
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import './index.css'

import { connect } from 'react-redux'
import routes from '../index'

export const User = (props) => {
    return (
        <>
            <div className={`sidebar `}>
                <div className={`${null ? 'back' : ''} left `}>
                    <div>
                        <button onClick={null} className={`btn-toggle-user`}>
                            <ion-icon name="menu-outline"></ion-icon>
                        </button>
                        <select value={null} onChange={null}>
                            <option value="id">Indonesia</option>
                            <option value="en">English</option>
                        </select>
                        {/* {renderOptionTheme()} */}
                    </div>
                    <div className="sidebar-description">
                        <img src={null} alt="" />
                        <div>
                            <p>{null}</p>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <ul>

                        </ul>
                    </div>
                </div>
                <div className="right">
                    <Routes>
                        {routes.map((route) => {
                            if (route.sidebar)
                                return <Route path={route.path} element={route.component} />
                        })}
                    </Routes>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    theme: state.theme.theme,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(User)

