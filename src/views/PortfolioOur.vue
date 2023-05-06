<template>

<section class="aboutuspg md:h-screen md:px-12 md:pt-48 pt-24 p-4">
    <div class="grid md:grid-cols-2 justify-center items-center container mx-auto md:w-4/5">
        <div class="text-left">
            <span class="md:text-6xl text-3xl text-dgtext-800 font-extrabold">We Strive For</span><br>
            <span class="md:text-6xl text-3xl text-red-950 font-extrabold">Excellence</span>
            <p class="mt-4">Visit our portfolio to see the previous work that has gotten us incredible praise and gratitude from our customers. Our portfolio includes animations, printing, graphics, logos, and website development.</p>
            <div class="mt-8">
                <CTAButton class="ctaabout mr-4 bg-dgcon-500 px-4 py-2 shadow-xl rounded-xl text-dgcon-400 font-bold">Contact Us</CTAButton>
            </div>
        </div>
        <div class="rotate flex flex-col-reverse items-end md:mt-[-10em]">
            <div class="portLines w-1/2 h-10 bg-gradient-to-r from-red-950"></div>
            <div class="portLines w-9/12 h-10 bg-gradient-to-r from-dgbg-900"></div>
            <div class="portLines w-full h-10 bg-gradient-to-r from-dgtext-800"></div>
        </div>
    </div>
</section>

<section class="tabsComp">
    <TabsWrapper>
        <TabView title="Logo"><ClientLogos/></TabView> 
        <TabView title="Website">Hello From Tab 2</TabView>
        <TabView title="Ecommerce">Hello From Tab 3</TabView>
        <TabView title="Animation">Hello From Tab 4</TabView>
    </TabsWrapper>
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
import TabsWrapper from '@/components/Tabs/TabsWrapper.vue'
import TabView from '@/components/Tabs/TabView.vue'
import ClientLogos from '@/components/ClientLogos/ClientTail.vue'
import ContactForm from '@/components/ContactForm/MyContact.vue'
import CTAButton from '@/components/NavButton.vue'

export default {
name: "HomePage",
    components: {
        TabView,
        TabsWrapper,
        ClientLogos,
        ContactForm,
        CTAButton                
    },
}
</script>

<style scoped>
.tabsComp{
    z-index: 10;
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
}
</style>