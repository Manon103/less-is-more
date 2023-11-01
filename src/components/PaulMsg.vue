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
    <div>
        <img :src="img" class="paul" alt="paul logo" />
    </div>
    <h1>{{ msg }}</h1>
    <button type="button" @click="getMoreMsg">Click me for more!!!</button>
</template>

<style scoped>
.paul {
  width: 12rem;
}
.read-the-docs {
  color: #888;
}
</style>
