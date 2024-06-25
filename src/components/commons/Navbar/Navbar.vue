<script setup lang="ts">
import SearchProducts from './SearchProducts.vue'
import Package2Icon from '../../icons/Package2Icon.vue'

</script>

<template>
  <nav class="relative">
    <div class="fixed top-0 right-0 left-0 h-16 border-b border-primary-50/10 flex bg-primary-50 dark:bg-primary-950/5">
      <div class=" text-primary-500 basis-3/12 flex gap-2 justify-start items-center border-e border-primary-50/10 px-4">
        <Package2Icon class="size-8" />
        <h1 class="text-xl md:text-2xl ">Appname</h1>
      </div>
      <div class="basis-9/12 flex justify-start items-center px-4 lg:px-8">
        <SearchProducts />
      </div>
    </div>
  </nav>
</template>