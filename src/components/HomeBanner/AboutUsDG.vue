<template>
<div class="aboutusCard text-left bg-dgtext-800 flex space-x-6 md:ml-32 px-8 py-4 rounded-2xl hover:bg-dgcon-400">
    <div class="KeyPoint bg-dgbg-900 px-[8px] rounded-xl"><i :class="iconClasses"></i></div>
    <div class="text-dgbg-900 md:font-bold text-sm">{{ title }}</div>
</div>
</template>

  
<script>
export default {
    name: 'AboutUSCard',
    props: {
        iconClasses: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
    }
}
</script>

<style scoped>
.aboutusCard{
    transition: 3s;
}
.aboutusCard:hover{
    transition: 1s;
    transform: translateY(-10px);
}
</style>
