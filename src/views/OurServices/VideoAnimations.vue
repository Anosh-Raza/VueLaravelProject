<template>
<section class="aboutDigi md:h-fit md:py-48 h-screen pt-40">
    <div class="flex justify-center items-center md:px-12 p-4 container mx-auto md:w-4/5">
        <div id="forz" class="text-center">
            <span class="md:text-6xl text-3xl text-dgcon-500 font-extrabold">Video</span>
            <span class="md:text-6xl text-3xl text-red-950 font-extrabold">Animations</span>
            <p class="mt-4 text-dgbg-900">Creating eye-catching visuals that portray your ideas in the most pleasing manner</p>
            <div class="mt-4">
                <CTAButton class="ctaabout my-4 bg-dgcon-400  text-dgbg-900 hover:text-white border-solid border-2 border-gray-950 rounded-lg">
                    <router-link to="/contact-us">Get Started</router-link>
                </CTAButton>
            </div>
        </div>
    </div>
    <div>
        <RevieRating />
    </div>
</section>

<section class="container mx-auto md:w-4/5 px-8">
    <div class="grid md:grid-cols-2 justify-between items-center md:p-8 p-4 bg-formbg-850 my-16 rounded-2xl shadow-xl">
        <div class="text-left">
            <div class="flex items-center">
                <div class="lineBefore" style="background-color: #e40246;"></div>
                <div class="firstheading text-dgtext-800 md:text-sm text-[10px] md:font-extrabold font-bold">WE HAVE</div>
            </div>
            <span class="md:text-4xl text-2xl text-red-950 font-extrabold">Video Animations</span>
            <p class="mt-8">Bring your brand story to life with credibility and recognition
                Articulate your brand’s message to your audience in an engaging & relatable manner with animations. Build your brand’s credibility for grabbing attention & effectively promoting your offerings.Get on your creative journey with animated videos, enabling your brand to narrate its story and promote its offerings in an interesting, fun, and a resourceful way. Whether it’s about educating your audience or convincing them to buy from you, our animation services will set the bar high for your competition. Amplify your business’ demand & make it noticeable in the digital world.</p>
        </div>
        <div class="mt-4">
            <img class="" src="@/assets/videoani/video.svg" alt="">
        </div>
    </div>
</section>

<section class="container mx-auto md:w-4/5 px-8 my-12">
    <div class="p-8 block sm:hidden">
        <div class="flex justify-center">
            <img id="imgIcon" src="@/assets/digiIcon/PersonaIcon.svg" width="200px" alt="">
        </div>
    </div>
    <div class="grid md:grid-cols-2 justify-between items-center md:space-x-8">
        <div id="service1" class="p-8 hover:shadow-xl">
            <div id="img"><img src="@/assets/videoani/service1.avif" alt=""></div>
            <h4 class="md:text-2xl text-xl text-red-950 font-extrabold">Display Your Stuff</h4>
            <p class="text-sm">Videos are a great way to capture attention. The visuals and animations can make you stand out and thus are a strong tool for success. Videos and animations are a great way to communicate. You can deliver a message that alerts all the sensory motions through videos</p>
        </div>
        <div class="p-8 hidden md:block">
            <div class="flex justify-center ">
                <img id="imgIcon" src="@/assets/digiIcon/PersonaIcon.svg" width="200px" alt="">
            </div>
        </div>
    </div>
</section>

<section class="container mx-auto md:w-4/5 px-8 my-12">
    <div class="grid md:grid-cols-2 justify-between items-center md:space-x-8">
        <div class="p-8">
            <div class="flex justify-center">
                <img id="imgIcon" src="@/assets/digiIcon/CreativeIcon.svg" width="200px" alt="">
            </div>
        </div>
        <div id="service1" class="p-8 hover:shadow-xl">
            <div id="img"><img src="@/assets/videoani/service2.avif" alt=""></div>
            <h4 class="md:text-2xl text-xl text-red-950 font-extrabold">Team Who Gives life to Videos</h4>
            <p class="text-sm">Our team has an excellent ability to take your vision and give life to it. With our video and animation skills, your ideas can be delivered to the world in a fun and pleasing style. Our services include 2d and 3d animations, HD videos with customizations.</p>
        </div>
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
import CTAButton from '@/components/NavButton.vue'
import ContactForm from '@/components/ContactForm/MyContact.vue'

export default {
    name: "DigitalMarketing",
    components: {
        CTAButton,
        ContactForm
    },

}
</script>

    
<style scoped>
.aboutDigi {
    background-image: url('@/assets/servicesBG.png');
}

#service1:hover {
    transform: translateY(-10px);
    transition: 1s ease-out;
}

#service1 {
    border: 2px solid #0000001a;
    border-radius: 26px;
}

#imgIcon:hover {
    transform: translateY(-10px);
    transition: 1s;
}
</style>
