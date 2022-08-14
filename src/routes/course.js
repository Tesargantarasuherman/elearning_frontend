import Course from "../pages/Course";
import CourseDetail from "../pages/CourseDetail";
import CourseCheckout from "../pages/CourseCheckout";
import CoursePlaying from "../pages/CoursePlaying";

const root = "/course";



const course = [
    {
        path: `${root}`,
        component: <Course />,
        navbar: true,
        auth:true,
        sidebar:false,
    },
    {
        path: `${root}/detail/:id`,
        component: <CourseDetail />,
        navbar: true,
        is_user:false,
    },
    {
        path: `${root}/checkout/:id`,
        component: <CourseCheckout />,
        navbar: true,
        is_user:false,
    },
    {
        path: `${root}/playing/:id`,
        component: <CoursePlaying />,
        navbar: false,
        user:false,
    },
];

export default course;
