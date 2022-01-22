import Course from "../pages/Course";
import CourseDetail from "../pages/CourseDetail";
import CourseCheckout from "../pages/CourseCheckout";

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
];

export default course;
