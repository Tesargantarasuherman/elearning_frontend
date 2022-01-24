import home from "./home";
import course from "./course";
import user from "./user";
import homeadmin from "./admin/home";
import dashboardadmin from './admin/dashboard'

const routes = [...home,...course,...user,...homeadmin,...dashboardadmin];


export default routes;

