<script setup lang="ts">
import { ref } from 'vue';


let msg = ref("Hi, Betsy! I'm your best friend!");
let img = ref('https://static-lessismore.oss-cn-shanghai.aliyuncs.com/assets/paul.jpg');
const getMoreMsg = () => {
    msg.value = 'Oops! To be continued.'
    img.value = 'https://static-lessismore.oss-cn-shanghai.aliyuncs.com/assets/pual-laugh.jpg'
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
