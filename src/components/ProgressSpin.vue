<template>
    <div class="w-32 h-32 relative">
      <div class="absolute top-0 left-0 w-full h-full rounded-full text-center">
        <div class="text-lg font-bold leading-none pt-10">
          {{ progress }}%
        </div>
        <div class="text-sm font-light leading-none">
          Progress
        </div>
      </div>
      <svg class="absolute top-0 left-0 w-full h-full">
        <circle class="stroke-current stroke-2 text-gray-300"
          :r="radius"
          :cx="center"
          :cy="center"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="offset"
          fill="none"
        />
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        progress: 0,
        radius: 16,
        circumference: 2 * Math.PI * 16,
        center: 16,
        offset: 0
      };
    },
    methods: {
      startProgress() {
        const interval = setInterval(() => {
          this.progress++;
          this.offset = this.circumference - (this.progress / 100) * this.circumference;
          if (this.progress === 100) {
            clearInterval(interval);
          }
        }, 50);
      }
    },
    mounted() {
      this.startProgress();
    }
  };
  </script>
  