<script setup lang="ts">

defineProps(['products', 'deleteProduct','setEditing'])
// defineEmits(['setEditing'])

import Product from './Product.vue'


</script>

<template>
  <ul class="flex flex-col gap-2 items-center justify-center w-full">
    <Product v-for="(current_product, index) in products" :key="index" :product="current_product"
      :deleteProduct="deleteProduct" :setEditing="setEditing" />
  </ul>
</template>