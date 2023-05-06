<template>
<section class="aboutDigi md:h-fit md:py-48 h-screen pt-40">
    <div class="flex justify-center items-center md:px-12 p-4 container mx-auto md:w-4/5">
        <div id="forz" class="text-center">
            <span class="md:text-6xl text-3xl text-dgcon-500 font-extrabold">Content </span>
            <span class="md:text-6xl text-3xl text-red-950 font-extrabold">Writing</span>
            <p class="mt-4 text-dgbg-900">we add an extra bit of oomph to the words, making your brand’s content digestible, eye-catching, and hard to resist.</p>
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
                <div class="firstheading text-dgtext-800 md:text-sm text-[10px] md:font-extrabold font-bold">SOLUTION FOR</div>
            </div>
            <span class="md:text-4xl text-2xl text-red-950 font-extrabold">Content Writing</span>
            <p class="mt-8">Transform mediocrity to excellence with resonant storytelling
                Whether you want to capture attention or inspire action, it all starts with content that is compelling, relatable, and purposeful. Give your audience some food for thought and connect with them.Content is king – it increases brand awareness, engages your audience, and drives them to take action. Talk about brilliant copywriting or smart content that stand out from the crowd, our services enable you to deliver high-quality content that helps you to build lasting relationships with your customers and win their long-term loyalty by being insightful, authentic, and creative.</p>
        </div>
        <div class="mt-4">
            <img class="" src="@/assets/contentWriting/content_creator.svg" alt="">
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
            <div id="img"><img src="@/assets/contentWriting/service1.webp" alt=""></div>
            <h4 class="md:text-2xl text-xl text-red-950 font-extrabold">Web Content That Empowers</h4>
            <p class="text-sm">At <strong>DG Concepts</strong>, we know the science of persuasion, the art of writing, the technique of conquering ideas. Guided by the power of skills, we create influential content that can covert bland information into mesmerizing messages. Turning messages to results, readers to customers, and curiosity to action, our engaging linguistics and faultless literacy makes our web content the best of the best. And we do so by first understanding your business model, preferences, and value propositions. This allows us to align our skills with your interests.</p>
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
            <div id="img"><img src="@/assets/contentWriting/service2.webp" alt=""></div>
            <h4 class="md:text-2xl text-xl text-red-950 font-extrabold">SEO Article That Stop Thumbs</h4>
            <p class="text-sm">Stories are thought provoking. Advertisements are show stopping. Articles are both. They are not just a pile of information divided into paragraphs. Instead, Articles have the ability to drive traffic, engage more customers, and compel them to take action. Our dexterous writers produce original content that serves the purpose, instead of pumping out shabby pieces of data. The SEO articles we produce are known for being loud and clear just in the way they should be.</p>
        </div>
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
            <CTAButton class="ctaabout mr-4 my-4 bg-dgcon-500 px-4 py-2 rounded-xl text-dgcon-400 font-bold">Get Started</CTAButton>
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
