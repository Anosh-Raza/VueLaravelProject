<template>
<div>
    <div class="navbar bg-dgtext-800 fixed w-full z-10">
        <nav class="
          container
          px-6
          py-4
          mx-auto
          md:flex md:justify-between md:items-center shadow-xl
        ">
            <div class="flex items-center justify-between">
                <router-link to="/" class="
              text-xl
              text-dgbg-900
              md:text-2xl
            ">Logo
                </router-link>
                <!-- Mobile menu button -->
                <div @click="showMenu = !showMenu" class="flex md:hidden">
                    <button type="button" class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              ">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <ul :class="showMenu ? 'flex' : 'hidden'" class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          ">
                <li class="text-sm font-bold text-dgbg-900 hover:text-dgbg-900">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="text-sm font-bold text-dgbg-900 hover:text-dgbg-900">
                    <router-link to="/aboutus">About</router-link>
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
                        Get Started
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
export default {
    components: {
        CTAButton
    },
    data() {
        return {
            showMenu: false,
        };
    },
};
</script>

<style scoped>
.ctaButton:hover {
    box-shadow: 0px 1px 16px 7px #ffffff73;
}
</style>
