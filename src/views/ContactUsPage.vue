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
        </div>
        <div>
            <ContactForm/>
        </div>
    </div>
</section>

<section>
    <div class="home">
        <Modal @close="toggleModal" :modalActive="modalActive">
            <div class="modal-content">
                <h1>this is </h1>
                <p>this is modal message </p>
            </div>
        </Modal>
        <button @click="toggleModal" type="button">Open Modal</button>
    </div>
</section>

</template>

<script>
import ContactForm from '../components/ContactForm/MyContact.vue'
import Modal from '../components/Modal/ModalComp.vue'
import { ref } from 'vue'

export default {
    components: {
        ContactForm,
        Modal
    },
    setup() {
        const modalActive = ref(false);

        const toggleModal = () => {
            modalActive.value = !modalActive.value;
        };

        return { modalActive, toggleModal };
    },
}
</script>

<style scoped>
.lineBefore{
    height: 5px;
    width: 25px;
    margin-right: 10px;
    background-color: #e40246;
    border-radius: 10px;
}
</style>
