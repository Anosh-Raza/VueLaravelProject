<template>

<transition name="modal-animation">
    <div v-show="modalActive" class="modal">
        <transition name="modal-aniamtion-inner">
            <div v-show="modalActive" class="modal-inner">
                <!-- Modal Content -->
                <slot />
                <button v-if="isButtonVisible" @click="close" type="button">Close</button>
            </div>
        </transition>
    </div>
</transition>
</template>

<script>
export default {
    props: ["modalActive"],
    setup(props, {
        emit
    }) {
        const close = () => {
            emit('close')
        };
        return {
            close
        };
    },

};
</script>

<style scoped>

</style>
