<template>
<section class="aboutDigi md:h-fit md:py-48 h-screen pt-40">
    <div class="flex justify-center items-center md:px-12 p-4 container mx-auto md:w-4/5">
        <div id="forz" class="text-center">
            <span class="md:text-6xl text-3xl text-dgcon-500 font-extrabold">Digital </span>
            <span class="md:text-6xl text-3xl text-red-950 font-extrabold">Marketing</span>
            <p class="mt-4 text-dgbg-900">Whether you want to go all loud and proud or unfold your success story in phases, our marketing services set your brand apart</p>
            <div class="mt-4">
                <CTAButton class="ctaabout my-4 bg-dgcon-400  text-dgbg-900 hover:text-white border-solid border-2 border-gray-950 rounded-lg">Contact Us</CTAButton>
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
</template>

<script>
import CTAButton from '@/components/NavButton.vue'

export default {
    name: "DigitalMarketing",
    components: {
        CTAButton,
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
