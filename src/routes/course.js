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
    },
    {
        path: `${root}/detail/:id`,
        component: <CourseDetail />,
        navbar: true,
    },
    {
        path: `${root}/checkout/:id`,
        component: <CourseCheckout />,
        navbar: true,
    },
    {
        path: `${root}/playing/:id`,
        component: <CoursePlaying />,
        navbar: false,
    },
];

export default course;
