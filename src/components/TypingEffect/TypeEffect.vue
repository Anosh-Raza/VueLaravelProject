<template>
    <div>
      <span>{{ typedText }}</span><span :class="{ 'hide-cursor': !showCursor }">|</span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        words: ['Technolgy', 'Innovation', 'Future'],
        currentWordIndex: 0,
        typedText: "",
        currentIndex: 0,
        showCursor: true,
      };
    },
    methods: {
      startTyping() {
        const currentWord = this.words[this.currentWordIndex];
        if (this.currentIndex < currentWord.length) {
          this.typedText += currentWord[this.currentIndex];
          this.currentIndex++;
        } else {
          this.showCursor = false;
          setTimeout(() => {
            this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
            this.currentIndex = 0;
            this.typedText = "";
            this.showCursor = true;
            this.startTyping();
          }, 500); // Delay before changing to the next word (in milliseconds)
          return;
        }
        setTimeout(this.startTyping, 100); // Typing speed (in milliseconds)
      },
    },
    mounted() {
      this.startTyping();
    },
  };
  </script>
  
  <style>
  span {
    font-family: sans-serif;
  }
  
  .hide-cursor {
    pointer-events: none;
  }
  </style>
  