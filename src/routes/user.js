import User from "../pages/User";
import Login from "../pages/Login";
import Register from "../pages/Register";

const root = "/user";

const user = [
    {
        path: `${root}`,
        component: <User />,
        navbar: true,
        sidebar:true,
    },
    {
        path: `${root}/login`,
        component: <Login/>,
        navbar: true,
    },
    {
        path: `${root}/register`,
        component: <Register/>,
        navbar: true,
    },
];

export default user;
