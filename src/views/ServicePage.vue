<template>
    <section class="aboutuspg md:h-screen md:pt-40 pt-24">
        <div class="grid md:grid-cols-2 justify-center items-center md:px-12 p-4 container mx-auto md:w-4/5">
            <div id="forz" class="text-left">
                <span class="md:text-6xl text-3xl text-dgtext-800 font-extrabold">See</span><br>
                <span class="md:text-6xl text-3xl text-red-950 font-extrabold">Our Services</span>
                <p class="mt-4">DG Concepts takes pride in its quality services. DG Concepts services include web designing and development, printing and branding, digital marketing, and animations and graphics.</p>
                <div class="mt-8">
                    <CTAButton class="ctaabout my-4 bg-dgcon-400  text-dgbg-900 hover:text-white border-solid border-2 border-gray-950 rounded-lg"><router-link to="/contact-us">Get Started</router-link></CTAButton>
                </div>
            </div>
            <div class="rotate flex flex-col-reverse items-end mt-[-10em]">
                <div class="portLines w-1/2 h-10 bg-gradient-to-r from-red-950"></div>
                <div class="portLines w-9/12 h-10 bg-gradient-to-r from-dgbg-900"></div>
                <div class="portLines w-full h-10 bg-gradient-to-r from-dgtext-800"></div>
            </div>
        </div>
        <div>
            <RevieRating/>
        </div>
    </section>    
    <section>
        <div class="container mx-auto w-5/6 mt-8">
            <h3 id="serVSec" class="text-4xl text-gray-950 pt-20 pb-8 font-bold">Our <span class="serviceSection font-thin font-sans text-5xl">Services</span></h3>
            <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 px-[20px]">
                <HomeCard iconClasses="bi bi-box-arrow-up-right" title="Digital Marketing" description="We use multiple social media platforms to market brands by our innovative concepts and designs" buttonText="Learn More"/>
                <HomeCard iconClasses="bi bi-filetype-html" title="Web Development" description="We provide web design & development services to help your business to grow rapidly" buttonText="Learn More"/>
                <HomeCard iconClasses="bi bi-person-video2" title="Video Animations" description="So for this purpose we have highly experienced team and editors to provide you with seamless videos" buttonText="Learn More"/>
            </div>
            <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 px-[20px] mt-4">
                <HomeCard iconClasses="bi bi-search" title="Branding" description="Need to print your logo on a shirt, bag, wallet, or even wall we have got you covered" buttonText="Learn More"/>
                <HomeCard iconClasses="bi bi-pencil-square" title="Content Writing" description="Whats your story?! Tell us we’ll portray it for you to attract the livings" buttonText="Learn More"/>
                <HomeCard iconClasses="bi bi-bullseye" title="Graphics" description="We conceive idea behind picture. We have best graphic designers to portrait your imagination" buttonText="Learn More"/>
            </div>
        </div>
    
    </section>
    

    
    <section>
        <div class="bg-dgtext-800 mt-20">
            <MultipleCounters />
        </div>
    </section>
    
    <section class="container mx-auto w-5/6 py-20">
        <div class="grid md:grid-cols-2 items-center">
            <div class="flex md:justify-center justify-start pb-4">
                <img :src="mockup" alt="Logo">
            </div>
            <div class="text-left">
                <h2 class="md:text-2xl text-xl text-dgtext-800">Stay Digital With Our <span class="text-dgcon-400 font-bold md:text-3xl">DG Concepts</span> Marketing Strategy</h2>
                <p class="py-4">Dg Concepts is a full-service digital marketing agency that lives and breathes “Outside the box”. From design and development to SEO services, pay-per-click, content, social, and beyond, we work together to ensure you see the best results across all campaigns.</p>
                <CTAButton class="ctaabout mr-4 bg-dgcon-500 hover:bg-green-600 text-dgcon-400 font-bold">Get Started</CTAButton>
            </div>
        </div>
    </section>
    
    <section class="container mx-auto w-full">
        <div>
            <h2 class="md:text-5xl text-dgtext-800 md:py-4 font-extrabold">Our Clients</h2>
            <ClientLogos />
        </div>
    </section>
    
    <section class="bg-gray-950 mt-12">
        <div class="flex justify-center">
            <img src="../assets/online_ad.svg" alt="">
        </div>
        <h3 class="text-2xl font-extrabold text-green-500 py-8">See Our Client</h3>
        <div>
            <ClientCarousel />
        </div>
    </section>
    
    <section class="aboutUStwo container mx-auto pt-8 md:pb-32 my-8">
        <h3 class="text-2xl font-extrabold">Schedule Your <span class="tracking-[0.5em] text-red-950">Free</span></h3>
        <h5 class="md:text-xl">Consultation</h5>
        <div class="grid lg:grid-cols-2 justify-center  text-left md:mt-12 p-8">
            <div class=" md:pr-16">
                <p class="text-2xl font-extrabold text-red-950">Ask The Way You Want</p>
                <h4 class="text-lg font-bold">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h4>
                <p class="pt-8 md:text-sm">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <ul class="list-none pt-8 pl-4">
                    <li class="marker-color">Separated they live Separated they</li>
                    <li class="marker-color">Grove right at Grove right at</li>
                    <li class="marker-color">The coast of the coast of the</li>
                    <li class="marker-color">Semantics, a large sem antics, a large</li>
                </ul>
                <CTAButton class="ctaabout mr-4 my-4 bg-dgcon-500 px-4 py-2 shadow-xl rounded-xl text-dgcon-400 font-bold">Get Started</CTAButton>
            </div>
            <div>
                <p class="text-3xl font-extrabold text-dgtext-800 text-green-500 pb-4 ">Fill The Form</p>
                <ContactForm />
            </div>
        </div>
    </section>
    </template>
    
    <script>
    import RevieRating from '../components/ReviewsRating.vue'
    import CTAButton from '../components/NavButton.vue'
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import HomeCard from '../components/HomeCards.vue'
    import ClientCarousel from '../components/Carousel/VueCarousel.vue'
    // import UserCard from '../components/HomeBanner/UserCard.vue'
    import ContactForm from '../components/ContactForm/MyContact.vue'
    import MultipleCounters from '../components/Counter/VueJSCounter.vue'
    import ClientLogos from '../components/ClientLogos/ClientTail.vue'
    // import {
    //     onMounted
    // } from "vue";
    // import useStudent from '../composables/studentApi';
    // const {
    //     studentData,
    //     error,
    //     getAllStudent
    // } = useStudent();
    // onMounted(getAllStudent);
    
    export default {
        name: "HomePage",
        components: {
            CTAButton,
            HomeCard,
            ContactForm,
            ClientCarousel,
            MultipleCounters,
            ClientLogos,
            RevieRating
        },
        data() {
            return {
                images: ['https://cdn.pixabay.com/photo/2019/04/24/11/47/screens-4151969_960_720.png'],
                image1: ['https://www.pngmart.com/files/11/Technology-Transparent-PNG.png'],
                mockup: require('@/assets/mockup.png'),
            }
        }
    };
    </script>
    
    <style scoped>
.reviwLine{
    transform: rotate(0deg);    
}
.marker-color::before{
        content: "\25BA";
      display: inline-block;
      width: 1.5em;
      margin-left: -1em;
      color: #e40246;
    }
    .portLines{
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    .aboutuspg{
        background-image: url('../assets/aboutUSbg.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
    .rotate{
        transform: rotate(142deg);
        overflow: hidden;
        z-index: 1;
    }
    #forz{
        z-index: 10;
    }
    .bannerForm {
        box-shadow: 1px 1px 20px 11px #ffffff24;
    }
    
    .bannerBoxShadow {
        box-shadow: 6px -1px 10px 0 black;
    }
    
    .serviceSection {
        position: relative;
    }
    
    .serviceSection::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: #ec0f0f;
    }
    
    .bannerUser {
        transition: 3s;
    }
    
    .bannerUser:hover {
        transform: translateY(-10px);
        transition: 3s;
    }
    
    .ctaabout {
        box-shadow: 9px 7px 38px -1px rgba(0, 0, 0, 0.29);
    }
    
    .ctaabout:hover {
        transform: translateY(-10px);
        transition: transform 0.5s ease-in-out;
    }
    
    .homecards {
        box-shadow: 1px 1px 12px 0 #00000024;
        border-radius: 20px;
    }
    </style>
    