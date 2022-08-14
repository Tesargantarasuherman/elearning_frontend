import User from "../pages/User";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../components/Profile/Profile";

const root = "/user";

const user = [
    {
        path: `${root}`,
        component: <User />,
        sidebar:true,
        is_user:false,
    },
    {
        path: `${root}/login`,
        component: <Login/>,
        navbar: true,
        is_user:false,
    },
    {
        path: `${root}/register`,
        component: <Register/>,
        navbar: true,
        is_user:false,
    },
    {
        path: `${root}/profile`,
        component: <Profile/>,
        sidebar:true,
        is_user:true,
    },
];

export default user;
