<template>
<div id="clientLogo" class=" grid grid-cols-4 py-8 justify-center">
    <img :src="cl1" alt="">
    <img :src="cl2" alt="">
    <img :src="cl3" alt="">
    <img :src="cl4" alt="">
</div>
<div id="clientLogo" class="grid grid-cols-4 justify-center">
    <img :src="cl5" alt="">
    <img :src="cl6" alt="">
    <img :src="cl7" alt="">
    <img :src="cl8" alt="">
</div>
</template>

<script>
export default {
    data() {
        return {
            cl1: require('@/assets/clients/HDM.png'),
            cl2: require('@/assets/clients/changan.png'),
            cl3: require('@/assets/clients/hands.png'),
            cl4: require('@/assets/clients/jdc.png'),
            cl5: require('@/assets/clients/unique.png'),
            cl6: require('@/assets/clients/khalil.png'),
            cl7: require('@/assets/clients/siddiqui.png'),
            cl8: require('@/assets/clients/zaidi.png'),
        }
    }
}
</script>

<style scoped>
#clients {
    overflow-y: scroll;
    overflow-x: none;
}

img{
    background-color: rgb(247, 247, 247);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.096);
}

@media screen and (min-width: 788px) {
    #clientLogo{
        gap: 20px;
    }
}
@media screen and (max-width: 399px) {
    #clientLogo{
        gap: 5px;
    }
    img{
    border-radius: 5px;
}
}

</style>
