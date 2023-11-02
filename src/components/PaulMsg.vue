<script setup lang="ts">
import { ref } from 'vue';
import paulImg  from '../assets/paul.jpg';
import paulLaughImg  from '../assets/paul-laugh.jpg';


let msg = ref("Hi, Betsy! I'm your best friend!");
let img = ref(paulImg);
const getMoreMsg = () => {
    msg.value = 'Oops! To be continued.'
    img.value = paulLaughImg;
}

</script>

<template>
   <div class="paul-page">
      <div>
          <img src="http://www.lessismore-here.com/assets/vue-5532db34.svg" alt="" srcset="">
          <img :src="img" class="paul" alt="paul logo" />
      </div>
      <h1 class="paul-msg">{{ msg }}</h1>
      <button type="button" @click="getMoreMsg">Click me for more!!!</button>
   </div>
</template>

<style scoped>
.paul-page {
  height: 100%;
  width: 100%;
  padding-top: 2rem;
  /* background-image: url('https://media-public.canva.cn/Pbt5k/MADVfNPbt5k/4/s2.jpg'); */
}
.paul-msg {
  color: #fff;
  line-height: 1;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}
.paul {
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  object-fit: cover;
}
.read-the-docs {
  color: #888;
}
</style>
