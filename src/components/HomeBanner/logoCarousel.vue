<template>
<swiper :modules="modules" :slides-per-view="2" :slides-per-group="1" :space-between="5" :loop="true" :pagination="false" :navigation="{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }" :autoplay="{
        delay: 500,
        disbaleOnInteraction: false,
        pauseOnMouseEnter: false
    }"
     :breakpoints="{
          399: {
            slidesPerView: 3,
            spaceBetween: 20
          }}">
    <swiper-slide v-for="text in swiperTextBase" :key="text.description">
            <div class="md:px-44 px-5 w-32 md:w-full md:py-12 py-8">
                <img :src="text.img" alt="">
            </div>
    </swiper-slide>
</swiper>
</template>

<script>
import {
    Swiper,
    SwiperSlide
} from 'swiper/vue';
import {
    Autoplay,
    Pagination
} from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/css'
import 'swiper/css/pagination'
import {
    ref
} from 'vue'
import CSS from '@/assets/css.svg';
import HTML from '@/assets/html.svg';
import JS from '@/assets/js.png';
import Wordpress from '@/assets/wordpress.png';

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        const swiperTextBase = ref([{
                img: CSS,
            },
            {
                img: HTML,
            },
            {
                img: JS,
            },
            {
                img: Wordpress,
            },
        ]);
        return {
            modules: [Pagination, Autoplay],
            swiperTextBase
        }
    },
}
</script>
