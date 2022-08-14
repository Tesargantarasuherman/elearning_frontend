import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const root = "";



const home = [
    {
        path: `${root}/`,
        component: <Home />,
        navbar: true,
        is_user:false,
    },
    {
        path: `${root}/login`,
        component: <Login />,
        navbar: true,
        is_user:false,
    },
    {
        path: `${root}/register`,
        component: <Register />,
        navbar: true,
        is_user:false,
    },
];

export default home;
