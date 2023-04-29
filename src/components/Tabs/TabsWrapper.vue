<template>
    <div class="tabs">
        <ul class="tabs_header">
            <li
            v-for="title in tabTitles" :key="title"
            :class="{selected: title == selectedTitle}"
            @click="selectedTitle = title"
            >
            {{ title }}
        </li>
        </ul>
        <slot/>
    </div>
  </template>

  <script>

import {ref, provide } from 'vue'
export default {
    setup (props, {slots}) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])
        provide('selectedTitle', selectedTitle)
        return {
            selectedTitle,
            tabTitles,
        }
    }
}

</script>

<style scoped>
.tabs{
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.tabs_header{
    margin-bottom: 10px;
    list-style: none;
    padding: 0;
    display: flex;
}
.tabs_header li{
    width: 100%;
    text-align: center;
    padding: 5px 20px;
    margin-right: 10px;
    background-color: #ddd;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s all ease-out;
}
.tabs_header li.selected{
    color: white;
    background-color: #e40246;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.15);
}

@media screen and (max-width:399px) {
    .tabs_header{
        width: 300px;
    }    
    .tabs_header li{
    width: 80%;
    font-size: 11px;
    text-align: center;
    padding: 2px;
    margin-right: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s all ease-out;
}
}
</style>