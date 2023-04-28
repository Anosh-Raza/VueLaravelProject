<template>
    <div ref="lottie"></div>
  </template>
  
  <script>
  import lottie from 'lottie-web';
  
  export default {
    props: {
      animationData: {
        type: Object,
        required: true,
      },
    },
    mounted() {
      this.lottie = lottie.loadAnimation({
        container: this.$refs.lottie,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: this.animationData,
      });
    },
    beforeUnmount() {
      this.lottie.destroy();
    },
  };
  </script>  