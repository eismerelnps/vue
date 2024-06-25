<script setup lang="ts">
import { ref } from 'vue'
const say = () => {

};


const count = ref(0)
const increment = () => {
  count.value ++
}
</script>

<template>
  <div class="size-72 bg-red-500 flex items-center justify-center">
    <h1>{{ count }}</h1>
    <button @click="increment">
ssssss
    </button>
  </div>
</template>