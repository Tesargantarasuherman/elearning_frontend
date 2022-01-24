import Dashboard from "../../pages/admin/dashboard/Dashboard";


const root = "/admin";



const dashboard = [
    {
        path: `${root}/dashboard`,
        component: <Dashboard />,
        sidebar: true,
    },

];

export default dashboard;
