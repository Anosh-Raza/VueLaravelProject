<template>
<section class="aboutuspg md:h-screen md:px-12 md:pt-48 pt-24 p-4">
    <div class="grid md:grid-cols-2 justify-center items-center container mx-auto md:w-4/5">
        <div class="text-left">
            <span class="md:text-6xl text-3xl text-dgtext-800 font-extrabold">Empowering</span><br>
            <span class="md:text-6xl text-3xl text-red-950 font-extrabold">Technolofy</span>
            <p class="mt-4">As a full-service technology and digital marketing company we bring our insights, knowledge, and expertise to the digital ecosystem to create exponential growth for online retailers and e-commerces in the GCC region.</p>
            <div class="mt-8">
                <CTAButton class="ctaabout mr-4 bg-dgcon-500 px-4 py-2 shadow-xl rounded-xl text-dgcon-400 font-bold">Contact Us</CTAButton>
            </div>
        </div>
        <div class="rotate flex flex-col-reverse items-end mt-[-10em]">
            <div class="portLines w-1/2 h-10 bg-gradient-to-r from-red-950"></div>
            <div class="portLines w-9/12 h-10 bg-gradient-to-r from-dgbg-900"></div>
            <div class="portLines w-full h-10 bg-gradient-to-r from-dgtext-800"></div>
        </div>
    </div>
</section>

<section class="flex justify-center items-center bg-dgcon-500">
    <LogoTail />
</section>

<section>
    <div class="container mx-auto w-5/6">
        <h3 id="serVSec" class="text-4xl text-gray-950 pt-20 pb-8 font-bold">Our <span class="serviceSection font-thin font-sans text-5xl">Services</span></h3>
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 px-[20px]">
            <HomeCard iconClasses="bi bi-box-arrow-up-right" title="Digital Marketing" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, inventore?" buttonText="Learn More" />
            <HomeCard iconClasses="bi bi-filetype-html" title="Web Development" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, inventore?" buttonText="Learn More" />
            <HomeCard iconClasses="bi bi-brush-fill" title="Logo Designing" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, inventore?" buttonText="Learn More" />
        </div>
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 px-[20px] mt-4">
            <HomeCard iconClasses="bi bi-search" title="SEO" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, inventore?" buttonText="Learn More" />
            <HomeCard iconClasses="bi bi-bullseye" title="PPC" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, inventore?" buttonText="Learn More" />
            <HomeCard iconClasses="bi bi-pencil-square" title="Content Writing" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, inventore?" buttonText="Learn More" />
        </div>
    </div>

</section>

<section class="container mx-auto w-5/6">
    <div class="grid md:grid-cols-2 md:my-20 my-8 items-center">
        <div class="text-left px-[20px]">
            <h3 class="text-3xl">About Us | <span class="text-dgcon-400 font-bold">DG Concepts</span></h3>
            <p style="line-height: 32px;" class="text-lg">Dg Concepts is a full-service digital marketing agency that lives and breathes “Outside the box”. From design and development to SEO services, pay-per-click, content, social, and beyond, we work together to ensure you see the best results across all campaigns.</p>
            <CTAButton class="ctaabout my-4 mr-4 bg-dgcon-400  text-dgbg-900 border-solid border-2 border-gray-950 rounded-lg">Learn More</CTAButton>
            <CTAButton class="ctaabout my-4 bg-dgcon-400  text-dgbg-900 hover:text-white border-solid border-2 border-gray-950 rounded-lg">Get Started</CTAButton>
        </div>

        <div class="md:px-[20px] space-y-4 flex flex-col justify-start w-full">
            <AboutUSCards iconClasses="bi bi-cloud-check-fill" title="Be on the top of Google" />
            <AboutUSCards iconClasses="bi bi-clock-fill" title="Save your time & let us handle it" />
            <AboutUSCards iconClasses="bi bi-phone-fill" title="Cross-devices ability" />
            <AboutUSCards iconClasses="bi bi-award-fill" title="Be rewarded by our services" />
        </div>
    </div>
</section>

<section>
    <div class="bg-dgtext-800">
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

<section class="container mx-auto w-4/5">
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
    <div class="bg-dgtext-800">
        <ClientCarousel />
    </div>
</section>

<SECTION class="my-12 bg-dgtext-800">
<div class="container mx-auto w-4/5 py-8">
    <div class="text-left">
        <div class="text-dgbg-900 md:text-6xl text-3xl font-bold">Frequently</div>
        <div class="text-dgbg-900 md:text-4xl text-lg font-bold tracking-[0.5em] pt-2">Asked Question</div>
    </div>
    <AccordionView />
</div>
</SECTION>

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
        <div class="md:pt-4 p-8 bg-dgtext-800 rounded-2xl text-dgcon-500">
            <p class="text-3xl font-extrabold text-green-500 pb-4 ">Fill The Form</p>
            <ContactForm />
        </div>
    </div>
</section>
</template>

<script>
import AccordionView from '@/components/Accordian/AccordianView.vue'
import LogoTail from '../components/HomeBanner/logoCarousel.vue'
import CTAButton from '../components/NavButton.vue'
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomeCard from '../components/HomeCards.vue'
import ClientCarousel from '../components/Carousel/VueCarousel.vue'
// import UserCard from '../components/HomeBanner/UserCard.vue'
import ContactForm from '../components/ContactForm/MyContact.vue'
import AboutUSCards from '../components/HomeBanner/AboutUsDG.vue'
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
        // UserCard,
        LogoTail,
        MultipleCounters,
        AboutUSCards,
        ClientLogos,
        AccordionView,
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
