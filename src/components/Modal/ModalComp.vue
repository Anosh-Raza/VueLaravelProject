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
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.modal-animation-enter,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active,
.modal-animation-inner-leave-active {
  transition: transform 0.2s ease-in-out;
}

.modal-animation-inner-enter,
.modal-animation-inner-leave-to {
  transform: scale(0.7);
}
</style>