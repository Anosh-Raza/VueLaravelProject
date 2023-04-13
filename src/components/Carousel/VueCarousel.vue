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
        <div class="md:p-8 p-4 md:text-left">
            <h1 class="md:text-2xl font-extrabold text-green-500 md:tracking-[0.51em]">{{ text.author }}</h1>
            <p class="text-white md:text-[50px] text-2xl md:leading-[1em] italic md:py-4 md:pr-4">{{ text.description }}</p>
            <p class="text-green-500 text-sm">{{ text.designation }}</p>
        </div>
    <img class="rounded-full" :src="text.img" alt="">
    </div>
</swiper-slide>
</swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/css'
import 'swiper/css/pagination'
import {ref} from 'vue'

export default{
    components: {
        Swiper,
        SwiperSlide
    },
    setup(){
        const swiperTextBase = ref ([
            {
                author: 'Noon Pawl',
                description: '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, error!',
                designation: "CEO | Twitter",
                img: 'https://images.barrons.com/im-709895?width=639&height=426',
            },
            {
                author: 'Noon Pawl',
                description: '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, error!',
                designation: "CEO | Twitter",
                img: 'https://images.barrons.com/im-709895?width=639&height=426',
            },
            {
                author: 'Noon Pawl',
                description: '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, error!',
                designation: "CEO | Twitter",
                img: 'https://images.barrons.com/im-709895?width=639&height=426',
            }
        ]);
        return{modules: [Pagination, Autoplay], swiperTextBase}
    },
}
</script>