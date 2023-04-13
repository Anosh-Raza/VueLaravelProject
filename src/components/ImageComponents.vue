<template>
    <div>
      <img class="md:mr-4 md:px-16 w-1/2" :src="getImageUrl('wordpress.png')" alt="">
      <img class="md:mr-4 md:px-16 w-1/2" :src="getImageUrl('css.svg')" alt="">
      <img class="md:mr-4 md:px-16 w-1/2" :src="getImageUrl('html.svg')" alt="">
      <img class="md:mr-4 md:px-16 w-1/2" :src="getImageUrl('js.png')" alt="">
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      getImageUrl(fileName) {
        return require(`@/assets/${fileName}`);
      },
    },
  };
  </script>
  