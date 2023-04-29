<template>
<section class="aboutuspg md:h-screen md:px-12 pt-28 p-4">
    <div class="grid md:grid-cols-2 justify-center container mx-auto md:space-x-8 space-y-10">
        <div><img src="@/assets/blog1.webp" alt=""></div>
        <div class="text-left">
            <div class="text-red-950 text-xl font-bold">DIGITAL MARKETER</div>
            <div class="text-dgtext-800 text-sm font-bold">Sunday, 30 April, 2023</div>
            <div class="text-dgtext-800 md:text-5xl text-3xl font-extrabold mt-12">Is Performance Marketing at ITCAN Any Good? 4 Reasons Why.</div>
            <p class="my-8 md:mr-28">Due to the increased dependency on online platforms since COVID-19, the digital marketing landscape has massively transformed in dubai.</p>
            <button class="bg-red-950 text-dgcon-500 px-8 rounded-2xl">Read More<span class="ml-4"><i class="bi bi-arrow-right"></i></span></button>
        </div>
    </div>
</section>
<section class="aboutuspg md:h-screen md:px-12 pt-48 p-4">
    <div class="grid md:grid-cols-2 justify-center items-center container mx-auto md:space-x-8 space-y-10">
        <div class="bgContainer rounded-xl">
            <div class="z-10 p-8 text-left space-y-6">
                <p class="text-dgbg-900 text-sm font-bold">/DigitalMarketing</p>
                <h3 class="text-dgbg-900 text-3xl font-extrabold">The Art Of Happiness</h3>
                <p class="text-dgbg-900 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsam!</p>
                <div class="grid grid-cols-2 justify-between">
                    <div class="text-dgbg-900 text-sm">
                        <div><i class="bi bi-person-fill"></i> John Pawl</div>
                        <div><i class="bi bi-calendar-range"></i> Monday, 14 April 2023</div>
                    </div>
                    <div> <button class="bg-red-950 text-dgcon-500 px-4 rounded-xl text-sm">Read More<span class="ml-4"><i class="bi bi-arrow-right"></i></span></button></div>
                </div>
            </div>
            <div class="colorOverlay"></div>
        </div>
        <div class="bgContainer rounded-xl">
            <div class="z-10 p-8 text-left space-y-6">
                <p class="text-dgbg-900 text-sm font-bold">/DigitalMarketing</p>
                <h3 class="text-dgbg-900 text-3xl font-extrabold">The Art Of Happiness</h3>
                <p class="text-dgbg-900 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsam!</p>
                <div class="grid grid-cols-2 justify-between">
                    <div class="text-dgbg-900 text-sm">
                        <div><i class="bi bi-person-fill"></i> John Pawl</div>
                        <div><i class="bi bi-calendar-range"></i> Monday, 14 April 2023</div>
                    </div>
                    <div> <button class="bg-red-950 text-dgcon-500 px-4 rounded-xl text-sm">Read More<span class="ml-4"><i class="bi bi-arrow-right"></i></span></button></div>
                </div>
            </div>
            <div class="colorOverlay"></div>
        </div>
    </div>
</section>
<section class="aboutuspg md:h-screen md:px-12 pt-28 p-4 mb-48">
    <div class="grid md:grid-cols-2 justify-center container mx-auto md:space-x-8 space-y-10">
        <div><img src="@/assets/blog1.webp" alt=""></div>
        <div class="text-left">
            <div class="text-red-950 text-xl font-bold">DIGITAL MARKETER</div>
            <div class="text-dgtext-800 text-sm font-bold">Sunday, 30 April, 2023</div>
            <div class="text-dgtext-800 md:text-5xl text-3xl font-extrabold mt-12">Is Performance Marketing at ITCAN Any Good? 4 Reasons Why.</div>
            <p class="my-8 md:mr-28">Due to the increased dependency on online platforms since COVID-19, the digital marketing landscape has massively transformed in dubai.</p>
            <button class="bg-red-950 text-dgcon-500 px-8 rounded-2xl">Read More<span class="ml-4"><i class="bi bi-arrow-right"></i></span></button>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "BlogPage"
}
</script>

<style scoped>
i {
    color: white;
}

.bgContainer {
    background: url('../assets/blog1.webp');
    position: relative;
    align-items: end;
    justify-content: start;
    display: flex;
    height: 80vh;
    background-size: cover;
    background-position: center;
}

.colorOverlay {
    background: linear-gradient(rgba(255, 255, 255, 0), black);
    opacity: 0.8;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
