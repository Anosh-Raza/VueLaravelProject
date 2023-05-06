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
            spaceBetween: 20,
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
import android from '@/assets/homeIcons/android.png';
// import angular from '@/assets/homeIcons/angular.png';
// import atom from '@/assets/homeIcons/atom.png';
import bootstrap from '@/assets/homeIcons/bootstrap.png';
import css from '@/assets/homeIcons/css.png';
// import digital from '@/assets/homeIcons/digital.png';
// import flutter from '@/assets/homeIcons/flutter.png';
// import growth from '@/assets/homeIcons/growth.png';
import html from '@/assets/homeIcons/html.png';
// import ios from '@/assets/homeIcons/ios.png';
import javascript from '@/assets/homeIcons/javascript.png';
import magento from '@/assets/homeIcons/magento.png';
import opencart from '@/assets/homeIcons/opencart.png';
// import php from '@/assets/homeIcons/php.png';
// import ppc from '@/assets/homeIcons/ppc.png';
// import redux from '@/assets/homeIcons/redux.png';
// import seo from '@/assets/homeIcons/seo.png';
import shopify from '@/assets/homeIcons/shopify.png';
// import swiftui from '@/assets/homeIcons/swiftui.png';
// import tailwind from '@/assets/homeIcons/tailwind.png';
// import vue from '@/assets/homeIcons/vue.png';
import wordpress from '@/assets/homeIcons/wordpress.png';

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        const swiperTextBase = ref([
            {
                img: css,
            },
            {
                img: android,
            },
            {
                img: wordpress,
            },
            {
                img: javascript,
            },
            {
                img: magento,
            },
            {
                img: opencart,
            },
            {
                img: shopify,
            },
            {
                img: html,
            },
            {
                img: bootstrap,
            },
            
            // {
            //     img: growth,
            // },
            // {
            //     img: php,
            // },
            // {
            //     img: ppc,
            // },
            // {
            //     img: tailwind,
            // },
        ]);
        return {
            modules: [Pagination, Autoplay],
            swiperTextBase
        }
    },
}
</script>
