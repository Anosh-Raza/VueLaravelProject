<template>
    <swiper :modules="modules" :slides-per-view="1" :slides-per-group="1" :loop="true" :pagination="false" :autoplay="{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false
    }" :breakpoints="{
              399: {
                slidesPerView: 3,
                slidesPerGroup: 1
              }}">
        <swiper-slide v-for="text in swiperTextBase" :key="text.description">
            <div class="serviceCard md:px-8 py-4 rounded-lg shadow-xl sm:pt-4">
            <i :class="iconClass" :style="{color: iconColor}"></i>
            <h4 class="text-2xl py-2">{{ h4Title }}</h4>
            <p>{{ cardDescp }}</p>
            <button class="button mt-4 bg-green-500 text-white px-2 rounded">
                {{buttonText}}
            </button>
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
    
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                QuoteMark: require('@/assets/quotation-mark-icon.webp'),
            }
        },
        setup() {
            const swiperTextBase = ref([{
                    title: 'Noon Pawl',
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
                },
                {
                    author: 'Noon Pawl',
                    description: '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, error!',
                    designation: "CEO | Twitter",
                    img: 'https://images.barrons.com/im-709895?width=639&height=426',
                }
            ]);
            return {
                modules: [Pagination, Autoplay],
                swiperTextBase
            }
        },
    }
    </script>
    
    <style scoped>
    .quotes {
        position: absolute;
        opacity: 0.05;
        top: 80%;
        left: 40%;
        margin-top: -150px;
        width: 50%;
    }
    </style>
    