<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div v-for="counter in counters" :key="counter.id" class="bg-white rounded-lg shadow-lg px-6 py-8 text-center">
    <div class="text-5xl text-dgbg-900 font-extrabold flex justify-center items-baseline">
        <VueJsCounter :start="counter.start" :end="counter.end" :duration="counter.duration" :thousand="counter.thousand" :decimal="counter.decimal">
        </VueJsCounter>
        <h4 class="font-medium text-dgbg-900 mb-4 text-2xl">{{ counter.showPlus }}</h4>
    </div>
    <h4 class="font-medium text-dgbg-900 mb-4">{{ counter.title }}</h4>
  </div>
</div>

  </template>
  
  <script>
  import VueJsCounter from 'vue-js-counter'
  
  export default {
    name: "MultipleCounters",
    components: {
      VueJsCounter,
    },
    data() {
      return {
        counters: [
          {
            id: 1,
            start: 0,
            end: 100,
            duration: 4000,
            thousand: ".",
            decimal: ",",
            title: "CLIENTS",
            showPlus: '+',
          },
          {
            id: 2,
            start: 0,
            end: 450,
            duration: 3000,
            thousand: ".",
            decimal: ",",
            title: "PROJECTS",
            showPlus: '+',
          },
          {
            id: 3,
            start: 0,
            end: 100,
            duration: 4000,
            thousand: ".",
            decimal: ",",
            title: "SATISFACTION",
            showPlus: '%',
          },
          {
            id: 4,
            start: 0,
            end: 8,
            duration: 5000,
            thousand: ",",
            decimal: ".",
            title: "YEARS OF SERVICES",
            showPlus: '+',
          },
        ],
      };
    },
  };
  </script>
  