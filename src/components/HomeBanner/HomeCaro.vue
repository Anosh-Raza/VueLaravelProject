<template>
    <swiper
    :modules="modules"
    :space-between="20"
    :loop="true"
    :pagination="{clickable: true}"
    :autoplay="{
        delay: 3000,
        disbaleOnInteraction: false,
        pauseOnMouseEnter: true
    }"
>
<swiper-slide v-for="text in swiperTextBase" :key="text.description">
    <div class="grid md:grid-cols-2 justify-center items-center md:px-28 px-10 md:py-12 py-8">
        <div class="slide-left md:p-8 p-4 text-left md:w-[500px]">
            <h1 class="md:text-2xl font-extrabold text-green-500 md:tracking-[0.51em]">{{ text.h1Tag }}</h1>
            <p class="text-white md:text-[50px] text-2xl md:leading-[1em] italic md:py-4 md:pr-4">{{ text.h2Tag }}</p>
            <p class="py-4">{{ text.description }}</p>
            <CTAbutton class="mr-4 hover:bg-green-600 hover:text-white">{{text.BtnH1}}</CTAbutton>
            <CTAbutton class="mr-4 hover:bg-green-600 hover:text-white">{{text.BtnH2}}</CTAbutton>
        </div>
    <img class="slide-up py-8" :src="text.img" alt="">
    </div>
</swiper-slide>
</swiper>
</template>

<script>
import CTAbutton from '../NavButton.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/css'
import 'swiper/css/pagination'
import {ref} from 'vue'

export default{
    components: {
        Swiper,
        SwiperSlide,
        CTAbutton

    },
    setup(){
        const swiperTextBase = ref ([
            {
                h1Tag: 'Data To Enrich Your',
                h2Tag: 'Online Business',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ducimus!',
                BtnH1: "Contact Us",
                BtnH2: "See Portfolio",
                img: 'https://cdn.pixabay.com/photo/2019/04/24/11/47/screens-4151969_960_720.png',
            },
            {
                h1Tag: 'Data To Enrich Your',
                h2Tag: 'Online Business',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ducimus!',
                BtnH1: "Contact Us",
                BtnH2: "See Portfolio",
                img: 'https://cdn.pixabay.com/photo/2019/04/24/11/47/screens-4151969_960_720.png',
            },
            {
                h1Tag: 'Data To Enrich Your',
                h2Tag: 'Online Business',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ducimus!',
                BtnH1: "Contact Us",
                BtnH2: "See Portfolio",
                img: 'https://cdn.pixabay.com/photo/2019/04/24/11/47/screens-4151969_960_720.png',
            }
        ]);
        return{modules: [Pagination, Autoplay], swiperTextBase}
    },
}
</script>

<style scoped>
.slide-up{
    animation: slideUp 1s forwards;
  opacity: 0;
}
@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.slide-left{
    animation: slideLeft 1s forwards;
  opacity: 0;
}
@keyframes slideLeft {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>