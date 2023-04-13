<template>
<section class="heroSection py-28 bg-gray-950">
    <div class="container mx-auto">
        <h1 class="text-5xl text-green-500">Our Portfolio</h1>
        <p class="text-gray-500">Check Out Our Portfolio</p>
    </div>
</section>
<section>
    <div class="grid md:grid-cols-2 justify-center items-center md:px-28 px-10 py-10">
        <div class="md:text-left md:pr-16">
            <H2 class="md:text-2xl text-[1.2em] font-bold">See Our Latest <br><span class="text-green-500 md:text-4xl">Development Projects</span></H2>
            <p class="text-[12px] md:text-base">Your digital consultant will also be able to kickstart campaigns and maximise your marketing budget. Lorem ipsum dolor sit amet. Our clients receive remarkable results.</p>
            <CTAButton class="ctaabout mt-4 mb-10 bg-gray-950 hover:bg-green-600 hover:text-white animate__animated animate__fadeInUp">Get Started</CTAButton>
        </div>
        <div class="basis-[45%] pb-5">
            <img v-for="(image, index) in images" :src="image" :key="index" />
        </div>
    </div>
</section>
<section>
    <H3 class="md:text-2xl text-[1.2em] font-bold">Check Our Latest </H3>
    <span class="text-green-500 md:text-4xl font-semibold">Web Development Projects</span>
    <div class="grid md:grid-cols-4 md:px-8 px-4 py-12 items-center justify-center">
        <div class="hover:border-2 md:p-4 border-green-500 hover:bg-green-300 transition-[3s]">
            <img v-for="(image, index) in images" :src="image" :key="index" />
        </div>
        <div class="hover:border-2 md:p-4 border-green-500 px-4 hover:bg-green-300 transition-[3s]">
            <img v-for="(image, index) in images" :src="image" :key="index" />
        </div>
        <div class="hover:border-2 md:p-4 border-green-500 hover:bg-green-300 transition-[3s]">
            <img v-for="(image, index) in images" :src="image" :key="index" />
        </div>
        <div class="hover:border-2 md:p-4 border-green-500 hover:bg-green-300 transition-[3s]">
            <img v-for="(image, index) in images" :src="image" :key="index" />
        </div>
    </div>
    <div class="grid md:grid-cols-4 md:px-8 px-4 py-4 items-center justify-center">
        <div class="hover:border-2 md:p-4 border-green-500 hover:bg-green-300 transition-[3s]">
            <img v-for="(image, index) in images" :src="image" :key="index" />
        </div>
        <div class="hover:border-2 md:p-4 border-green-500 px-4 hover:bg-green-300 transition-[3s]">
            <img v-for="(image, index) in images" :src="image" :key="index" />
        </div>
        <div class="hover:border-2 md:p-4 border-green-500 hover:bg-green-300 transition-[3s]">
            <img v-for="(image, index) in images" :src="image" :key="index" />
        </div>
        <div class="hover:border-2 md:p-4 border-green-500 hover:bg-green-300 transition-[3s]">
            <img v-for="(image, index) in images" :src="image" :key="index" />
        </div>
    </div>
</section>

<section class="bg-gray-950 mt-12">
    <div class="flex mx-auto justify-center">
        <img src="../assets/marketing.png" alt="">
    </div>
    <h3 class="text-2xl font-extrabold text-green-500 md:tracking-[0.51em]">See Our Client</h3>
    <ClientCarousel />
</section>

<section class="aboutUStwo container mx-auto pt-8 md:pb-32">
    <h4 class="md:text-4xl">Contact Us</h4>
    <div class="grid lg:grid-cols-2 justify-center  text-left md:mt-12 p-8">
        <div class=" md:pr-16">
            <p class="text-2xl font-extrabold text-green-500">Ask The Way You Want</p>
            <h4 class="text-lg font-bold">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h4>
            <p class="pt-8 md:text-sm">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <ul class="list-disc pt-8 pl-4">
                <li>Separated they live Separated they</li>
                <li>Grove right at Grove right at</li>
                <li>The coast of the coast of the</li>
                <li>Semantics, a large sem antics, a large</li>
            </ul>
            <button class="mt-8  bg-gray-950 hover:bg-green-500 text-white font-bold py-2 px-8 rounded">
                Click Now
            </button>
        </div>
        <div class="md:pt-0 pt-8">
            <p class="text-3xl font-extrabold text-green-500 pb-4">Fill The Form</p>
            <ContactForm/>
        </div>
    </div>
</section>
</template>

<script>
import CTAButton from '../components/NavButton.vue'
import ClientCarousel from '../components/Carousel/VueCarousel.vue'
import ContactForm from '../components/ContactForm/MyContact.vue'

export default {
    name: "PorfolioVue",
    components: {
        CTAButton,
        ClientCarousel,
        ContactForm
    },
    data() {
        return {
            images: ['https://i1.wp.com/teewebservices.com.ng/wp-content/uploads/2018/10/responsive-design1.png?fit=1260%2C793&ssl=1'],
        }
    }
}
</script>

<style scoped>
.ctaabout:hover {
    transform: translateY(-5px);
    transition: 0.5s ease-in;
    box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.158);
}

h3 {
    position: relative;
    text-align: center;
}

h3::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    /* Move the left edge of the underline to the center */
    transform: translateX(-50%);
    /* Center the underline horizontally */
    width: 10%;
    /* Set the width of the underline to 20% of the parent element */
    height: 2px;
    background-color: #030712;
}
</style>
