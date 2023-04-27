<template>
    <div class="homecards py-8 px-12">
      <i :class="iconClasses"></i>
      <h4 class="text-xl py-2">{{ title }}</h4>
      <p class="text-[12px] px-2 pt-1 pb-4">{{ description }}</p>
      <button class="serviceCard bg-dgcon-400 hover:bg-red-800 text-dgbg-900 py-1 px-4 rounded text-sm">
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
      // iconColor: {
      //   type: String,
      //   default: 'currentColor'
      // },
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
.homecards{
  transition: 1s;
}
.homecards:hover {
  background-color: #070A52;
  transform: translateY(-10px);
  transition: 1s;
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
i{
  font-size: 1em;
  color: white;
  background-color: #d21312;
  padding: 8px;
  border-radius: 7px;
}
.homecards:hover i{
  box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.568);
}

</style>
  