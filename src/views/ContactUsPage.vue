<template>
<section>
    <div class="grid md:grid-cols-2 pt-28 w-4/5 mx-auto py-28 space-y-10 items-start">
        <div class="text-left space-y-10 md:w-9/12 pt-10">
            <div class="flex items-center">
                <div class="lineBefore"></div>
                <div class="firstheading text-[19px] font-bold" style="color:black; letter-spacing: 0.5em;">CONTACT US</div>
            </div>
            <div class="md:text-5xl text-3xl font-extrabold">Get in touch & let’s talk</div>
            <p>We offer unparalleled regional and local insights. We listen. We co-create. We deliver. We are always ready to dive into the action.</p>
            <p>The question is, are you?</p>
            <div>
                <div class="flex items-center">
                    <div class="lineBefore"></div>
                    <div class="firstheading text-[14px] font-bold" style="color:black; letter-spacing: 0.3em;">FOLLOW US</div>
                </div>
                <ul style="list-style: none; display: flex; gap: 10px; font-size: 24px; padding: 0; margin-top: 10px;">
                    <li class="followCtc"><i class="bi bi-facebook"></i></li>
                    <li class="followCtc"><i class="bi bi-instagram"></i></li>
                    <li class="followCtc"><i class="bi bi-twitter"></i></li>
                    <li class="followCtc"><i class="bi bi-linkedin"></i></li>
                </ul>
            </div>
        </div>
        <div>
            <ContactForm />
        </div>
    </div>
</section>
</template>

<script>
import ContactForm from '../components/ContactForm/MyContact.vue'

export default {
    components: {
        ContactForm,
    },

}
</script>

<style scoped>
.lineBefore {
    height: 5px;
    width: 25px;
    margin-right: 10px;
    background-color: #e40246;
    border-radius: 10px;
}
</style>
