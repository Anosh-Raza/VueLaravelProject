<template>
<div>
    <div class="navbar bg-dgtext-800 fixed w-full z-20">
        <nav class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center shadow-xl">
            <div class="flex items-center justify-between">
                <router-link to="/" class="text-xl text-dgbg-900 md:text-2xl">Logo</router-link>
                <!-- Mobile menu button -->
                <div @click="showMenu = !showMenu" class="flex md:hidden">
                    <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current bg-dgcon-500 rounded-sm">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                <li class="text-sm font-bold text-dgbg-900 hover:text-dgbg-900">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="text-sm font-bold text-dgbg-900 hover:text-dgbg-900">
                    <router-link to="/aboutus">About</router-link>
                </li>
                <li class="text-sm font-bold text-dgbg-900 hover:text-dgbg-900">
                    <div class="home">
                        <Modal @mouseleave="toggleModal" :modalActive="modalActive">
                            <div class="modal-content grid grid-cols-2 space-x-2" style="transition: 5s">
                                <div>
                                    <li><router-link to="/services/digital-marketing">Digital Marketing</router-link></li>
                                    <li><router-link to="/services/web-development">Web Development</router-link></li>
                                    <li><router-link to="/services/graphic-designing">Graphic Designing</router-link></li>
                                </div>
                                <div>
                                    <li><router-link to="/services/content-writing">Content Writing</router-link></li>
                                    <li><router-link to="/services/branding-printing">Branding & Printing</router-link></li>
                                    <li><router-link to="/services/video-animations">Video Animations</router-link></li>
                                </div>
                            </div>
                        </Modal>
                        <button @mouseenter="toggleModal" @mouseleave="toggleModal" type="button">Services <i class="bi bi-caret-down-fill"></i></button>
                    </div>
                </li>
                <li class="text-sm font-bold text-dgbg-900 hover:text-dgbg-900">
                    <router-link to="/portfolio">Portfolio</router-link>
                </li>
                <li class="text-sm font-bold text-dgbg-900 hover:text-dgbg-900">
                    <router-link to="/blogsPage">Blogs</router-link>
                </li>
                <li class="text-sm font-bold text-dgbg-900 hover:text-dgbg-900">
                    <router-link to="/contact-us">Contact Us</router-link>
                </li>
                <li>
                    <CTAButton class="ctaButton text-sm font-bold text-red-950 bg-dgcon-500">
                        <router-link to="/contact-us">Get Started</router-link>
                    </CTAButton>
                </li>
            </ul>
        </nav>
    </div>
</div>
<router-view></router-view>
</template>

<script>
import CTAButton from './NavButton.vue'
import Modal from './Modal/ModalComp.vue'

import {ref} from 'vue'

export default {
    components: {
        CTAButton,
        Modal
    },
    data() {
        return {
            showMenu: false,
        };
    },
    setup() {
        const modalActive = ref(false);

        const toggleModal = () => {
            modalActive.value = !modalActive.value;
        };

        return { modalActive, toggleModal };
    },
};
</script>

<style scoped>
.ctaButton:hover {
    box-shadow: 0px 1px 16px 7px #ffffff73;
}
@media screen and (min-width: 766px) {
    .modal-content{
    position: absolute;
    top: 100%;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    text-align: left;
    padding: 22px;
    box-shadow: 1px 10px 17px 0px #00000061;
}    
}
.modal-content{
    background-color: #1f1646;
    padding: 12px;
    transition: 3s ease-out;
}
.modal-content li{
    margin: 10px 0;

}
</style>

