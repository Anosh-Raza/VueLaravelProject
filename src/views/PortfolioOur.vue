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

<section class="z-10">
    <TabsWrapper>
        <TabView title="Logo"><ClientLogos/></TabView> 
        <TabView title="Website">Hello From Tab 2</TabView>
        <TabView title="Ecommerce">Hello From Tab 3</TabView>
        <TabView title="Animation">Hello From Tab 4</TabView>
    </TabsWrapper>
</section>

</template>

<script>
import TabsWrapper from '@/components/Tabs/TabsWrapper.vue'
import TabView from '@/components/Tabs/TabView.vue'
import ClientLogos from '../components/ClientLogos/ClientTail.vue'
export default {
name: "HomePage",
    components: {
        TabView,
        TabsWrapper,
        ClientLogos
    },
}
</script>

<style scoped>
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