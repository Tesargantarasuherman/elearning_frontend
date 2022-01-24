import HomeAdmin from "../../pages/admin/HomeAdmin";


const root = "/admin";



const home = [
    {
        path: `${root}`,
        component: <HomeAdmin />,
        navbar: true,
    },

];

export default home;
