<template>
    <div class="homecards p-1 py-8">
      <i :class="iconClasses" :style="{ color: iconColor }"></i>
      <h4 class="text-2xl py-2">{{ title }}</h4>
      <p class="text-sm px-2 pt-1 pb-4">{{ description }}</p>
      <button class="serviceCard bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
    {{ buttonText }}
  </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeCard',
    props: {
      iconClasses: {
        type: String,
        required: true
      },
      iconColor: {
        type: String,
        default: 'currentColor'
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      buttonClasses: {
        type: String,
        default: 'ctaabout bg-gray-950 hover:bg-green-600 hover:text-white'
      },
      buttonText: {
        type: String,
        required: true
      },
      ctaClass: {
      type: String,
      default: 'ctaabout'
    },
    buttonTextClass: {
      type: String,
      default: ''
    }
    }
  }
  </script>


<style scoped>
.serviceCard:hover {
    transform: translateY(-10px);
    transition: transform 0.5s ease-in-out;
}
.homecards:hover {
  background-color: #111827;
}

.homecards:hover h4 {
  color: #fff;
}

.homecards:hover i {
  color: #fff;
}
.homecards:hover p {
  color: #fff;
}
.homecards:hover i {
  color: #fff;
}


</style>
  