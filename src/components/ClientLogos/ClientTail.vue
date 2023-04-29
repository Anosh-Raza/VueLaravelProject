<template>
    <swiper :modules="modules" :slides-per-view="1" :slides-per-group="1"  :loop="true" :pagination="false" :navigation="{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }" :autoplay="{
            delay: 500,
            disbaleOnInteraction: true,
            pauseOnMouseEnter: true
        }"
         :breakpoints="{
              399: {
                slidesPerView: 4,
                spaceBetween: 20
              }}">
        <swiper-slide v-for="text in swiperTextBase" :key="text.description">
                <div class="md:px-22 px-5 md:py-12 py-8">
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

    import Changan from '@/assets/clients/changan.png';
    import hands from '@/assets/clients/hands.png';
    import HDM from '@/assets/clients/HDM.png';
    import jdc from '@/assets/clients/jdc.png';
    import khalil from '@/assets/clients/khalil.png';
    import siddiqui from '@/assets/clients/siddiqui.png';
    import unique from '@/assets/clients/unique.png';
    import zaidi from '@/assets/clients/zaidi.png';

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        setup() {
            const swiperTextBase = ref([{
                    img: Changan,
                },
                {
                    img: hands,
                },
                {
                    img: HDM,
                },
                {
                    img: jdc,
                },
                {
                    img: khalil,
                },
                {
                    img: siddiqui,
                },
                {
                    img: unique,
                },
                {
                    img: zaidi,
                },
            ]);
            return {
                modules: [Pagination, Autoplay],
                swiperTextBase
            }
        },
    }
    </script>
    