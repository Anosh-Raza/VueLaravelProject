<template>
<section class="footer">
    <section class="bg-red-950 text-dgcon-500">
        <div class="grid md:grid-cols-2 py-4 px-4 items-center mx-auto max-w-screen-xl lg:py-4 lg:px-6 space-y-10">
            <div class="text-left space-y-5">
                <div class="flex items-center">
                    <div class="lineBefore"></div>
                    <div class="firstheading text-sm text-dgcon-500 font-bold">CONTACT US</div>
                </div>
                <div class="text-5xl">Let's write your <br> story, together.</div>
            </div>
            <div class="mx-auto max-w-screen-md text-left">
                <h2 class="mb-4 md:text-3xl tracking-tight font-extrabold text-gray-900 text-xl dark:text-white">Sign up for our newsletter</h2>
                <form action="#">
                    <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div class="relative w-full">
                            <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </div>
                            <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required>
                        </div>
                        <div>
                            <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                        </div>
                    </div>
                    <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
                </form>
            </div>
        </div>
    </section>
    <footer class="bg-dgtext-800 text-dgcon-500">
        <div class="mx-auto w-full max-w-screen-xl">
            <div class="grid gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div class="text-left">
                    <h2 class="mb-6 text-3xl font-semibold text-green-500 ">DG Concepts</h2>
                    <p class="text-green-100">DG Concepts involves team of experts who think and work out of the box and provides cost effective services to their customers.</p>
                </div>
                <div class="text-left">
                    <h2 class="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white tracking-[10px]">Main Menu</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/aboutus">About</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/portfolio">Portfolio</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/blogsPage">Blogs</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/contact-us">Contact Us</router-link>
                        </li>
                    </ul>
                </div>
                <div class="text-left">
                    <h2 class="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white tracking-[10px]">Services</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <router-link to="/services/digital-marketing">Digital Marketing</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/services/web-development">Web Development</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/services/graphic-designing">Graphic Designing</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/services/content-writing">Content Writing</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/services/branding-printing">Branding & Printing</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/services/video-animations">Video Animations</router-link>
                        </li>
                    </ul>
                </div>
                <div class="text-left">
                    <h5 class="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white tracking-[10px]">Contact Us</h5>
                    <div class="space-y-2">
                        <div class="flex space-x-4">
                        <i class="bi bi-geo-alt-fill"></i>
                        <div>B-35, Block 4, Gulshan e Iqbal, Karachi, Pakistan</div>
                    </div>
                    <div class="flex space-x-4">
                        <i class="bi bi-phone-fill"></i>
                        <div>+92 309 0420521</div>
                    </div>
                    <div class="flex space-x-4">
                        <i class="bi bi-whatsapp"></i>
                        <div>+92 309 0420521</div>
                    </div>
                    <div class="flex space-x-4">
                        <i class="bi bi-envelope-fill"></i>
                        <div>info@dgconcepts.com.pk</div>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
        <section id="Bottomfooter" class="bg-red-950">
                <div class="grid md:grid-cols-2 justify-center py-3 mx-auto w-full max-w-screen-xl">
                    <div class="text-sm text-left">2023 DG CONCEPTS Ⓒ ALL RIGHTS RESERVED</div>
                    <div class="text-sm text-right">Privacy Policy | Term & Condition | Careers</div>
                </div>
            </section>
    </footer>

</section>
</template>

<style scoped>
.lineBefore {
    height: 5px;
    width: 25px;
    margin-right: 10px;
    background-color: #1f1646;
    border-radius: 10px;
}
</style>
