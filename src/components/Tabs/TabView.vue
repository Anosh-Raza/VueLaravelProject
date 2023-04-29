<template>
    <div class="tab-content w-full" v-show="title == selectedTitle">
        <slot/>
    </div>
  </template>

  <script>
  import { inject } from 'vue';

  export default{
    name: "TabView",
    props: ['title'],
    setup() {
        const selectedTitle = inject('selectedTitle')
        return {
            selectedTitle,
        }
    }
  }
</script>

<style scoped>
.tab-content{
  min-height: 400px;
  padding: 20px;
  border-radius: 5px;
}
</style>