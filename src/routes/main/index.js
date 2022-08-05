
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../../routes/index";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/admin/Sidebar";
function Main(props) {
    return (
        <>
            {/* Navbar ----------------------------- */}
            <Routes>

                {routes.map((route) => {
                    if (route.navbar)
                        return <Route path={route.path} element={<Navbar Logout={props.Logout} theme={props.theme} setThemeAction={props.setThemeAction} />
                        } />;
                })}
            </Routes>

            {/* ---------------------------------- */}
            {/* Render Sidebar */}
            <Routes>
                {routes.map((route) => {
                    if (route.sidebar)
                        return <Route path={route.path} element={<Sidebar />} />;
                })}
                {/* <Route path="/" element={<Sidebar />} /> */}
            </Routes>

            {/* Render Page */}
            <Routes>
                {routes.map((route) => {
                    return <Route path={route.path} element={route.component} />
                })}
            </Routes>
        </>
    )
}

export default Main