<template>
<section class="aboutDigi md:h-fit md:py-48 h-screen pt-40">
    <div class="flex justify-center items-center md:px-12 p-4 container mx-auto md:w-4/5">
        <div id="forz" class="text-center">
            <span class="md:text-6xl text-3xl text-dgcon-500 font-extrabold">Graphics</span>
            <span class="md:text-6xl text-3xl text-red-950 font-extrabold">Designing</span>
            <p class="mt-4 text-dgbg-900">Give your ideas and dreams a face with the help of great visual communication tools</p>
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
                <div class="firstheading text-dgtext-800 md:text-sm text-[10px] md:font-extrabold font-bold">REVIVE YOUR</div>
            </div>
            <span class="md:text-4xl text-2xl text-red-950 font-extrabold">Digital Presence</span>
            <p class="mt-8">Be it your logo, color palette, typography, or imagery, we ensure that all design elements work cohesively to position your brand at the top to create a high-end impact on all digital mediums.From social media to print designs, our graphic design capabilities translate your story into spectacular visuals to yield greater traction and audience engagement at every level of the consumer journey. Infused with a mix of creativity, design thinking, and profound technical skills, our designs are detail-oriented, flawless, and everything you need to outperform on digital platforms</p>
        </div>
        <div class="mt-4">
            <img class="" src="@/assets/graphics/designer.svg" alt="">
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
            <div id="img"><img src="@/assets/graphics/service1.webp" alt=""></div>
            <h4 class="md:text-2xl text-xl text-red-950 font-extrabold">Effective way to Present</h4>
            <p class="text-sm">Graphics and illustrations are a great way to provide information. The graphics can be made in an interactive and engaging format that will keep the reader hooked to them. Great graphics can help you create more awareness and attract more customers</p>
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
            <div id="img"><img src="@/assets/graphics/service2.webp" alt=""></div>
            <h4 class="md:text-2xl text-xl text-red-950 font-extrabold">Meet Your Requirements</h4>
            <p class="text-sm">Our team of experts can help you by providing the most efficient services for your graphics needs. Our team works tirelessly to come up with creative ways to deliver the message and promote your ideas. We provide branding, logo designing and poster printing services.</p>
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
