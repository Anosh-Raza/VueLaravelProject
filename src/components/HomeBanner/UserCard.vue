<template>
    <div id="usercard" class="grid grid-cols-2 bg-white rounded-full justify-center m-40 absolute w-48 h-14 top-[-2em] left-[24em]" style="overflow: hidden; box-shadow: ;">
        <div class="w-20">
            <img v-for="(image, index) in image2" :src="image" :key="index" />
        </div>
        <div class="text-sm pt-2 text-left">
            <div class="font-extrabold"><slot name="name"></slot></div>
            <div class="bg-dgcon-400 rounded-lg pl-1 text-dgcon-500" style="box-shadow:rgb(0 0 0 / 65%) 2px 2px 4px 2px"><slot name="design"></slot></div>
        </div>
        <div class="blink"><span></span></div>
    </div>
</template>

<script>

export default{
    data() {
        return {
             image2: ['https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'],
        }
    }
}

</script>

<style scoped>
@media screen and (max-width: 992px){
    #usercard{
        display: none;
    }
}
.blink{
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background-color: greenyellow;
    animation: glowing 1300ms infinite;
    position: absolute;
    top: 1px;
    left: 163px;
}
@keyframes glowing {
        0% {
          background-color: #2ba805;
          box-shadow: 0 0 5px #2ba805;
        }
        50% {
          background-color: #49e819;
          box-shadow: 0 0 20px #49e819;
        }
        100% {
          background-color: #2ba805;
          box-shadow: 0 0 5px #2ba805;
        }
      }
</style>