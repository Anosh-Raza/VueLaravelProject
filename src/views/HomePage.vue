<template>
<!-- <div class="md:px-32 px-4 md:py-32 py-10 bg-gray-900 items-center">
    <div class="flex flex-col md:flex-row space-x-8 space-y-4">
        <div class="md:text-left text-center basis-1/2">
            <span class="md:text-5xl text-3xl font-bold text-green-500">
                Data To Enrich Your
            </span>
            <br>
            <div class="pt-1"></div>
            <span class="text-white font-bold text-xl md:text-5xl">
                Online Business
            </span>
            <div class="pt-4">
                <span class="text-gray-400 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eaque assumenda? Quia, hic! Veniam rerum vel eveniet soluta molestiae atque.
                </span>
            </div>
            <div class="pt-4"></div>
            <div class="flex justify-center md:justify-start">
                <CTAButton class="mr-4 hover:bg-green-600 hover:text-white">Get Started</CTAButton>
                <CTAButton class="hover:bg-green-600 hover:text-white">See Portfolio</CTAButton>
            </div>

        </div>
        <div class="flex justify-center py-8">
            <img v-for="(image, index) in images" :src="image" :key="index" />
        </div>
    </div>
</div> -->
<section class="bg-gray-900 md:h-screen pt-8">
    <HomeCarousel/>
</section>
<div class="container mx-auto flex p-8 flex-col sm:flex-row justify-between items-center">
    <div class="basis-[45%] pb-5">
        <img v-for="(image, index) in image1" :src="image" :key="index" />
    </div>
    <div class="basis-[55%] px-5 flex text-left flex-col">
        <h1 class="text-4xl">About | DG Concepts</h1>
        <p class="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi velit repellat exercitationem porro eos beatae accusamus, tempore, tenetur ipsam minus eligendi earum. Provident voluptates necessitatibus dolorem sit. Reprehenderit, officia molestias.</p>
        <p class="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi velit repellat exercitationem porro eos beatae accusamus, tempore, tenetur ipsam minus eligendi earum. Provident voluptates necessitatibus dolorem sit. Reprehenderit, officia molestias.</p>
        <div class="flex">
            <CTAButton class="ctaabout mr-4 bg-gray-950 hover:bg-green-600 hover:text-white">Get Started</CTAButton>
            <CTAButton class="ctaabout bg-gray-950 hover:bg-green-600 hover:text-white">See Portfolio</CTAButton>
        </div>
    </div>
</div>
<section>
    <div class="container mx-auto">
        <h3 class="text-5xl text-gray-950 pt-20 pb-8">Our Services</h3>
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 px-[20px]">
            <HomeCard iconClasses="bi bi-0-circle bi-4x" title="Digital Marketing" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, inventore?" buttonText="Learn More" />
            <HomeCard iconClasses="bi bi-0-circle bi-4x" title="Digital Marketing" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, inventore?" buttonText="Learn More" />
            <HomeCard iconClasses="bi bi-0-circle bi-4x" title="Digital Marketing" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, inventore?" buttonText="Learn More" />
            <HomeCard iconClasses="bi bi-0-circle bi-4x" title="Digital Marketing" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, inventore?" buttonText="Learn More" />
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

<section class="aboutUStwo container mx-auto pt-8 md:pb-32 my-8">
    <h3 class="md:text-4xl">Schedule Your <span class="font-extrabold tracking-[0.5em]">Free</span></h3>
            <h5 class="md:text-2xl">Consultation</h5>
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
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomeCard from '../components/HomeCards.vue'
import ClientCarousel from '../components/Carousel/VueCarousel.vue'
import HomeCarousel from '../components/HomeBanner/HomeCaro.vue'
import ContactForm from '../components/ContactForm/MyContact.vue'

export default {
    name: "HomePage",
    components: {
        CTAButton,
        HomeCard,
        ContactForm,
        ClientCarousel,
        HomeCarousel
    },
    data() {
        return {
            images: ['https://cdn.pixabay.com/photo/2019/04/24/11/47/screens-4151969_960_720.png'],
            image1: ['https://www.pngmart.com/files/11/Technology-Transparent-PNG.png'],
        }
    }
};
</script>

<style scoped>
.ctaabout:hover {
    transform: translateY(-10px);
    transition: transform 0.5s ease-in-out;
}

.homecards {
    box-shadow: 1px 1px 12px 0 #00000024;
    border-radius: 20px;
}
</style>
