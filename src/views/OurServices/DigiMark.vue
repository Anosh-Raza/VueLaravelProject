<template>
    <section class="aboutDigi md:h-fit md:pt-52 pt-24">
    <div class="flex justify-center  items-center md:px-12 p-4 container mx-auto md:w-4/5">
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
            <RevieRating/>
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

</style>