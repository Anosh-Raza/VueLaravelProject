<template>
<section class="heroSection py-28 bg-gray-950">
    <div class="container mx-auto">
        <h1 class="text-5xl text-green-500">About Us</h1>
        <p class="text-gray-500">Read About </p>
    </div>
</section>
<section class="aboutsection">
    <div class="grid lg:grid-cols-2 sm:grid-cols-2 gap-5 justify-center  items-center" style="background-image: url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5c2NyYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80);background-size: cover;
  background-repeat: no-repeat;background-position: center;">
        <div class="text-left p-12">
            <h5 class="text-gren-900 font-extrabold text-green-500 italic">Spinning The Wheel Is</h5>
            <h5 class="text-gren-900 font-extrabold text-white italic">Always Our Priority</h5>
            <h1 class="font-bold md:text-7xl text-4xl py-12 text-white"> Digital Marketing Agency In Los Angeles</h1>
            <CTAButton/>
        </div>
        <div>
        </div>
    </div>
</section>
<section class="services my-12 mx-12 md:pb-32">
    <h3 class="text-3xl font-bold ">Look Into Our Services</h3>
    <p>Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 justify-center items-center text-left md:space-x-10 pt-6">
        <AboutUsCard iconClass="bi bi-link-45deg" h4Title="Link Building" cardDescp="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, explicabo!" buttonText="Learn More" />
        <AboutUsCard iconClass="bi bi-arrow-up" h4Title="Monthly SEO Task" cardDescp="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, explicabo!" buttonText="Learn More" />
        <AboutUsCard iconClass="bi bi-bar-chart" h4Title="On Page SEO" cardDescp="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, explicabo!" buttonText="Learn More" />
    </div>
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 justify-center items-center md:space-x-10 pt-8 text-left">
        <AboutUsCard iconClass="bi bi-bullseye" h4Title="Top Ranking" cardDescp="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, explicabo!" buttonText="Learn More" />
        <AboutUsCard iconClass="bi bi-bar-chart" h4Title="Off Page SEO" cardDescp="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, explicabo!" buttonText="Learn More" />
        <AboutUsCard iconClass="bi bi-telephone-forward" h4Title="Quick Support" cardDescp="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, explicabo!" buttonText="Learn More" />
    </div>
</section>
<section class="aboutUStwo container mx-auto pt-8 md:pb-32">
    <h3 class="md:text-4xl">Increase your client for</h3>
    <h5 class="md:text-5xl text-xl mt-4"><span class="font-bold text-green-500">Better Position</span> of Business</h5>
    <div class="grid lg:grid-cols-2 justify-center items-center text-left mt-12">
        <div class="pt-8 p-8">
            <h4 class="text-lg font-bold">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h4>
            <p class="pt-8 md:text-sm">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <ul class="list-disc pt-8 pl-4">
                <li>Separated they live Separated they</li>
                <li>Grove right at Grove right at</li>
                <li>The coast of the coast of the</li>
                <li>Semantics, a large sem antics, a large</li>
            </ul>
            <button class="mt-8  bg-gray-950 text-white font-bold py-2 px-8 rounded">
                Click Now
            </button>
        </div>
        <div>
            <img v-for="(image, index) in image1" :src="image" :key="index" />
        </div>
    </div>
</section>
<section class="aboutUStwo container mx-auto pt-8 pb-52">
    <div class="grid lg:grid-cols-2 justify-center items-center text-left pt-4">
        <div class="imageclass">
            <img v-for="(image, index) in image2" :src="image" :key="index" />
        </div>
        <div class="pt-8 p-8">
            <h4 class="md:text-4xl text-2xl text-left pb-8 font-bold">Increase your client for</h4>
            <span class="md:text-7xl text-9xl absolute font-extrabold opacity-20">1</span>
            <p class="pt-8 md:text-sm z-10">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <div class="pt-8"></div>
            <span class="md:text-7xl text-9xl absolute font-extrabold opacity-20">2</span>
            <p class="pt-8 md:text-sm z-10">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <button class="mt-8 bg-gray-950 text-white text-sm py-2 px-4 rounded">
                Learn More
            </button>
        </div>
        <div class="md:hidden lg:hidden">
            <img v-for="(image, index) in image2" :src="image" :key="index" />
        </div>
    </div>
</section>
</template>

<script>
import CTAButton from '../components/NavButton.vue'
import AboutUsCard from '../components/AboutUsCard.vue'

export default {
    name: "AboutUs",
    components: {
        CTAButton,
        AboutUsCard,
    },
    data() {
        return {
            images: ['https://cdn-icons-png.flaticon.com/512/6968/6968064.png'],
            image1: ['https://wp.xpeedstudio.com/seocify/home-two/wp-content/uploads/sites/12/2018/08/service-img-1.png'],
            image2: ['https://wp.xpeedstudio.com/seocify/home-two/wp-content/uploads/sites/12/2018/08/service-summary-2.png']
        }
    }
}
</script>

<style scoped>
.aboutsection{
    overflow: hidden;
    position: relative;
    height: 500px;
}
.aboutsection::before {
    content: "";
    position: absolute;
    top: 50;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
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
    width: 20%;
    /* Set the width of the underline to 20% of the parent element */
    height: 1px;
    background-color: #030712;
}

button {
    position: relative;
    overflow: hidden;
    z-index: 1;
}

button::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    background-color: green;
    transition: all 0.3s ease-in-out 0s;
    z-index: -1;
}

button:hover::before {
    left: 0;
}

.rotated-text {
    transform: rotate(90deg);
    transform-origin: left top;
    white-space: nowrap;
}

@media only screen and (max-width: 499px) {
    .rotated-text {
        display: none;
    }

    .imageclass {
        display: none;
    }
}

.animate__animated {
    animation-duration: 1s;
    animation-fill-mode: both;
}

.animate__fadeInUp {
    animation-name: fadeInUp;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }

    to {
        opacity: 1;
        transform: none;
    }
}

.spinner {
    animation: spin 5s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

h1 {
    position: relative;
}

h1::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
}

h1:hover::after {
    visibility: visible;
    transform: scaleX(1);
}
</style>
