<template>
<section class="heroSection py-28 bg-gray-950">
    <div class="container mx-auto">
        <h1 class="text-5xl text-green-500">Contact Us</h1>
        <p class="text-gray-500">Check Out Our Portfolio</p>
    </div>
</section>
<section class="iconClass">
    <div class="grid lg:grid-cols-3 lg:space-x-8 my-12 md:mx-28 mx-12">
        <div class="card mt-10">
            <i class="bi bi-telephone-forward-fill"></i>
            <h5 class="text-xl">Call Us</h5>
            <p class="text-2xl"><a href="tel:123456798">+1 (234) 567 890</a></p>
        </div>
        <div class="card mt-10">
            <i class="bi bi-envelope-fill"></i>
            <h5 class="text-xl">Email</h5>
            <p class="text-2xl"><a href="mailto:info@dgconcepts.com.pk">info@dgconcepts.com.pk</a></p>
        </div>
        <div class="card mt-10">
            <i class="bi bi-geo-alt-fill"></i>
            <h5 class="text-xl">Location</h5>
            <p class="text-2xl">B-24, Block 4, Gulshan e Iqbal, Karachi</p>
        </div>
    </div>
</section>
<section class="aboutUStwo container mx-auto pt-8 md:pb-32">
    <div class="grid lg:grid-cols-2 justify-center  text-left md:mt-12 p-8">
        <div class="md:pr-16">
            <p class="text-2xl font-extrabold text-green-500">Ask The Way You Want</p>
            <h4 class="text-lg font-bold">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h4>
            <p class="pt-8 md:text-sm">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <ul class="list-disc pt-8 pl-4">
                <li>Separated they live Separated they</li>
                <li>Grove right at Grove right at</li>
                <li>The coast of the coast of the</li>
                <li>Semantics, a large sem antics, a large</li>
            </ul>
            <button class="mt-8  bg-gray-950 hover:bg-green-500 text-white font-bold py-2 px-8 rounded">
                Click Now
            </button>
        </div>
        <div class="md:pt-0 pt-8">
            <p class="text-3xl font-extrabold text-green-500 pb-4">Fill The Form</p>
            <ContactForm />
        </div>
    </div>
</section>
<section class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7235.760834750355!2d67.09592442239783!3d24.9361433647758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b6977e4233%3A0xa82ef378ceb7cd3f!2sHaseena%20Dental%20%26%20Medical!5e0!3m2!1sen!2s!4v1680869244779!5m2!1sen!2s" width="1500" height="650" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>
</template>

<script>
import ContactForm from '../components/ContactForm/MyContact.vue'

export default {
    components: {
        ContactForm
    }
}
</script>

<style scoped>
i {
    font-size: 22px;
}

.card {
    background-color: #22ec62;
    border-radius: 20px;
    padding: 20px;
    transition: 1s;
}

.card:hover {
    transform: translateY(-10px);
    transition: 1s;
    box-shadow: 0 10px 10px 0 black;
    background-color: #2c3e50;
    color: white;
}
</style>
