import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const root = "";



const home = [
    {
        path: `${root}/`,
        component: <Home />,
        navbar: true,
    },
    {
        path: `${root}/login`,
        component: <Login />,
        navbar: true,
    },
    {
        path: `${root}/register`,
        component: <Register />,
        navbar: true,
    },
];

export default home;
