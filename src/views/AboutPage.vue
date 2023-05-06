<template>
<section class="aboutuspg md:h-screen md:px-12 pt-28 p-4">
    <div class="grid md:grid-cols-2 justify-center items-center container mx-auto md:w-4/5">
        <div class="text-left">
            <span class="md:text-6xl text-3xl text-dgtext-800 font-extrabold">We Transfer</span><br>
            <span class="md:text-6xl text-3xl text-red-950 font-extrabold">Ecommerce</span>
            <p class="mt-4">DG Concepts takes pride in its quality services. DG Concepts services include web designing and development, printing and branding, digital marketing, and animations and graphics.</p>
            <div class="mt-8">
                <CTAButton class="ctaabout mr-4 bg-dgcon-500 px-4 py-2 shadow-xl rounded-xl text-dgcon-400 font-bold">See Portfolio</CTAButton>
            </div>
        </div>
        <div>
            <LottieAnimation :animationData="animationData" />
        </div>
    </div>
</section>
<section class="md:px-12 bg-dgtext-800 p-4">
    <div class="grid md:grid-cols-2 items-center container mx-auto md:pt-28 md:w-4/5 justify-between">
        <div class="">
            <img class="hidden sm:block justify-center pr-12" src="../assets/mobile_marketing.svg" alt="">
            <img class="block sm:hidden" src="../assets/web_search.svg" alt="">
        </div>
        <div class="text-left space-y-6">
            <h3 class="text-red-950 font-bold text-4xl">Mission</h3>
            <p class="text-dgbg-900 text-sm">DG Concepts is a team of talented individuals who bring different flavors to the table to create the perfect recipe for success. The company aims to provide the best possible services to help you and your business grow.</p>
            <h3 class="text-red-950 font-bold text-4xl">Our Goals</h3>
            <p class="text-dgbg-900 text-sm">The team at DG concepts believes in providing you the best bang for your buck. We back our performances with immaculate results and provide you with the most cost-effective services. Your goal is our goal and we make sure we work together to achieve them.</p>
            <h3 class="text-red-950 font-bold text-4xl">Why Us?</h3>
            <p class="text-dgbg-900 text-sm">DG Concepts involves a team of experts who think and work out of the box and provide cost-effective services to their customers.</p>
        </div>
    </div>
    <div class="mt-28" style="border-top: 1px solid #ffffff;">
        <MultipleCounters />
    </div>
</section>

<section class="container mx-auto w-full">
    <div class="my-12">
        <h2 class="text-2xl font-extrabold text-green-500 py-8">Our Clients</h2>
        <ClientLogos />
    </div>
</section>

<section class="bg-gray-950 mt-12">
    <h3 class="text-2xl font-extrabold text-green-500 py-8">See Our Client</h3>
    <div class="bg-formbg-850">
        <ClientCarousel />
    </div>
</section>

<section class="aboutUStwo container mx-auto pt-8 md:pb-32 my-8">
    <h3 class="text-2xl font-extrabold">Schedule Your <span class="tracking-[0.5em] text-red-950">Free</span></h3>
    <h5 class="md:text-xl">Consultation</h5>
    <div class="grid lg:grid-cols-2 justify-center  text-left md:mt-12 p-8">
        <div class=" md:pr-16">
            <div class="md:text-5xl text-3xl font-extrabold mb-8 text-red-950">Ask The Way You Want</div>
            <h4 class="text-lg font-bold">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h4>
            <p class="pt-8 md:text-sm">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <ul class="list-none pt-8 pl-4">
                <li class="marker-color">Separated they live Separated they</li>
                <li class="marker-color">Grove right at Grove right at</li>
                <li class="marker-color">The coast of the coast of the</li>
                <li class="marker-color">Semantics, a large sem antics, a large</li>
            </ul>
            <CTAButton class="ctaabout mr-4 my-4 bg-dgcon-500 px-4 py-2 shadow-xl rounded-xl text-dgcon-400 font-bold">Get Started</CTAButton>
            <div class="mt-8">
                <div class="flex items-center">
                    <div class="lineBefore"></div>
                    <div class="firstheading text-[14px] font-bold" style="color:black; letter-spacing: 0.3em;">FOLLOW US</div>
                </div>
                <ul style="list-style: none; display: flex; gap: 10px; font-size: 24px; padding: 0; margin-top: 10px;">
                    <li class="followCtc"><i class="bi bi-facebook"></i></li>
                    <li class="followCtc"><i class="bi bi-instagram"></i></li>
                    <li class="followCtc"><i class="bi bi-twitter"></i></li>
                    <li class="followCtc"><i class="bi bi-linkedin"></i></li>
                </ul>
            </div>
        </div>
        <div>
            <p class="text-3xl font-extrabold text-dgtext-800 text-green-500 pb-4 ">Fill The Form</p>
            <ContactForm />
        </div>
    </div>
</section>
</template>

<script>
import LottieAnimation from '../components/AboutPage/LottieAnimation/LottieAnimation.vue'
import animationData from '../components/AboutPage/LottieAnimation//data.json';
import MultipleCounters from '../components/Counter/VueJSCounter.vue'
import ClientLogos from '../components/ClientLogos/ClientTail.vue'
import ClientCarousel from '../components/Carousel/VueCarousel.vue'
import ContactForm from '../components/ContactForm/MyContact.vue'
import CTAButton from '../components/NavButton.vue'

export default {
    components: {
        LottieAnimation,
        MultipleCounters,
        ClientLogos,
        ClientCarousel,
        ContactForm,
        CTAButton
    },
    data() {
        return {
            animationData: animationData,
        };
    },
};
</script>

<style scoped>
.aboutuspg {
    background-image: url('../assets/aboutUSbg.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.aboutsec {
    background-image: url('../assets/aboutUSsec.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

/* .marker-color::marker{
    color: red;
    font-size: 1em;
} */
.marker-color::before {
    content: "\25BA";
    display: inline-block;
    width: 1.5em;
    margin-left: -1em;
    color: red;
}

.ctaabout:hover {
    transform: translateY(-10px);
    transition: 1s ease-in-out;
}
</style>
