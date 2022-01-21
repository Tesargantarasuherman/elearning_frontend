
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../../routes/index";
import Navbar from "../../components/Navbar/Navbar";
function Main(props) {
    return (
        <>
            {/* Navbar ----------------------------- */}
            <Routes>

                {routes.map((route) => {
                    if (route.navbar)
                        return <Route path={route.path} element={<Navbar Logout={props.Logout} handleClick={props.handleClick} theme={props.theme} setThemeAction={props.setThemeAction}/>
                        } />;
                })}
            </Routes>

            {/* ---------------------------------- */}
            {/* <Stack direction="row" flexWrap="wrap"> */}
            {/* Render Sidebar */}
            {/* <Routes>
                    {routes.map((route) => {
                        if (route.sidebar)
                            return <Route path={route.path} element={<Sidebar />} />;
                    })} */}
            {/* <Route path="/" element={<Sidebar />} /> */}
            {/* </Routes> */}

            {/* Render Page */}
            <Routes>
                {routes.map((route) => {
                    return <Route path={route.path} element={route.component} />;
                })}
            </Routes>
        </>
    )
}

export default Main