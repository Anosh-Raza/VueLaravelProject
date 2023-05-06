<template>
<section class="aboutDigi md:h-fit md:py-48 h-screen pt-40">
    <div class="flex justify-center items-center md:px-12 p-4 container mx-auto md:w-4/5">
        <div id="forz" class="text-center">
            <span class="md:text-6xl text-3xl text-dgcon-500 font-extrabold">Digital </span>
            <span class="md:text-6xl text-3xl text-red-950 font-extrabold">Marketing</span>
            <p class="mt-4 text-dgbg-900">Whether you want to go all loud and proud or unfold your success story in phases, our marketing services set your brand apart</p>
            <div class="mt-4">
                <CTAButton class="ctaabout my-4 bg-dgcon-400  text-dgbg-900 hover:text-white border-solid border-2 border-gray-950 rounded-lg">                        <router-link to="/contact-us">Get Started</router-link></CTAButton>
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
                <div class="firstheading text-dgtext-800 md:text-sm text-[10px] md:font-extrabold font-bold">TRUSTED WITH</div>
            </div>
            <span class="md:text-6xl text-2xl text-red-950 font-extrabold">Big Organizations</span>
            <p class="mt-8">Our trust and relationships with our valued customer are far beyond. We’ve team of experts that pays extra works to meet the customer requirements. Our loyality and timeline of services is the major key to fulfil our orders and customer requirements.</p>
        </div>
        <div class="mt-4">
            <img class="hidden sm:block justify-center pr-12" src="@/assets/mobile_marketing.svg" alt="">
            <img class="block sm:hidden" src="@/assets/web_search.svg" alt="">
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
            <div id="img"><img src="@/assets/digiIcon/service1.webp" alt=""></div>
            <h4 class="md:text-2xl text-xl text-red-950 font-extrabold">Great Monitoring Tool</h4>
            <p class="text-sm">Since the boom of technology digital marketing has become an important tool for business to stand out from the competition. For a strong brand they need a strong presence on the digital front as well. Our services cater to this demand by providing you with the latest digital marketing solutions which can help you elevate your business to next level.</p>
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
            <div id="img"><img src="@/assets/digiIcon/service2.webp" alt=""></div>
            <h4 class="md:text-2xl text-xl text-red-950 font-extrabold">Social Media Analysis</h4>
            <p class="text-sm">Our services include social media solutions where we handle and manage your social media accounts and get you a growth on your engagement. We are equipped to handle all your digital campaign needs from SEO to graphic designing. Our experts use analytical tools to provide you a complete insight on the performances.</p>
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
    background-image: url('@/assets/DigiTalMark.png');
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
