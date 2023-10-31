<script setup lang="ts">
import { ref } from 'vue';


let msg = ref("Hi, Betsy! I'm your best friend!");
let img = ref('paul');
const getMoreMsg = () => {
    msg.value = 'Oops! To be continued.'
    img.value = 'pual-laugh'
}

</script>

<template>
    <div>
        <img :src="`/src/assets/${img}.jpg`" class="paul" alt="paul logo" />
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
