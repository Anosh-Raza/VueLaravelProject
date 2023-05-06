import { createWebHistory,createRouter } from "vue-router"
import Home from './views/HomePage.vue'
import AboutUs from './views/AboutPage.vue'
import Blog from './views/BlogPage.vue'
import Services from './views/ServicePage.vue'
import Portfolio from './views/PortfolioOur.vue'
import ContactUs from './views/ContactUsPage.vue'
import DigiMarketing from './views/OurServices/DigiMark.vue'
import WebDev from './views/OurServices/WebDev.vue'
import GraphicDesign from './views/OurServices/GraphicDesign.vue'
import VideoAnimation from './views/OurServices/VideoAnimations.vue'
import Branding from './views/OurServices/SearchEngine.vue'
import ContentWriting from './views/OurServices/ContentWriting.vue'


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
        name:'Services',
        path:'/services',
        component:Services
    },
    {
        name:'DigiMarketing',
        path:'/services/digital-marketing',
        component:DigiMarketing
    },
    {
        name:'WebDev',
        path:'/services/web-development',
        component:WebDev
    },
    {
        name:'GraphicDesign',
        path:'/services/graphic-designing',
        component:GraphicDesign
    },
    {
        name:'VideoAnimation',
        path:'/services/video-animations',
        component:VideoAnimation
    },
    {
        name:'Branding',
        path:'/services/branding-printing',
        component:Branding
    },
    {
        name:'ContentWriting',
        path:'/services/content-writing',
        component:ContentWriting
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