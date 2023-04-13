<template>
    <div class="serviceCard px-8 py-4 rounded-lg shadow-xl sm:pt-4">
            <i :class="iconClass" :style="{color: iconColor}"></i>
            <h4 class="text-2xl py-2">{{ h4Title }}</h4>
            <p>{{ cardDescp }}</p>
            <button class="button mt-4 bg-green-500 text-white  px-2 rounded">
                {{buttonText}}
            </button>
        </div>
</template>

<script>

export default{
    name: 'AboutUsCard',
    props: {
        iconClass: {
            type: String,
            required: true
        },
        iconColor: {
            type: String,
            default: 'currentColor'
        },
        h4Title: {
            type: String,
            required: true
        },
        cardDescp: {
            type: String,
            required: true
        },
        buttonText:{
            type: String,
            required: true 
        },
    }
}
</script>

<style scoped>
.serviceCard{
    transition: 1s;
}
.serviceCard:hover{
    background-color: #22c55e;
    color: white;
    transition: 1s;
    transform: translateY(-10px);
}

i{
    font-size: 2em;
}
</style>