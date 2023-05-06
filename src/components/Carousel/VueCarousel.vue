<template>
<swiper :modules="modules" :slides-per-view="1" :slides-per-group="1" :loop="true" :pagination="false" :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false
}"  
:breakpoints="{
          399: {
            slidesPerView: 3,
            slidesPerGroup: 1
          }}">
    <swiper-slide v-for="text in swiperTextBase" :key="text.description">
        <div class="md:px-4 md:py-1 m-6 bg-red-950 rounded-xl">
            <div class="md:p-8 p-4 md:text-left">
                <div class="circle-image flex justify-center">
                    <img class="w-1/4 object-cover" :src="text.img" alt="">
                </div>
                <p class="text-white md:text-[30px] text-xl md:leading-[1em] italic py-4 md:pr-4 text-dgbg-900">{{ text.description }}</p>
                <h1 class="md:text-2xl font-extrabold text-dgbg-900 md:tracking-[0.01em]">{{ text.author }}</h1>
                <p class="text-dgbg-900 text-sm">{{ text.designation }}</p>
                <img class="quotes" :src="QuoteMark" alt="">
            </div>
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

.swiper-button-next,
.swiper-button-prev {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
}

.swiper-button-next {
    right: 10px;
    background-color: red;
}

.swiper-button-prev {
    left: 10px;
    background-color: red;
}
.circle-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 1px 1px 5px 5px rgba(0,0,0,.15);
}

.circle-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
