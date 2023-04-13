import { createWebHistory,createRouter } from "vue-router"
import Home from './views/HomePage.vue'
import AboutUs from './views/AboutPage.vue'
import Blog from './views/BlogPage.vue'
import Portfolio from './views/PortfolioOur.vue'
import ContactUs from './views/ContactUsPage.vue'


const routes=[
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'AboutUs',
        path:'/aboutus',
        component:AboutUs
    },
    {
        name:'Blog',
        path:'/blogsPage',
        component:Blog
    },
    {
        name:'Portfolio',
        path:'/portfolio',
        component:Portfolio
    },
    {
        name:'Contact',
        path:'/contact-us',
        component:ContactUs
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;