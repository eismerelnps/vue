<script setup lang="ts">
import SearchIcon from '../../icons/SearchIcon.vue'
</script>

<template>
  <div class="flex justify-between items-center w-full">
    <form>
      <div
        class="w-full max-w-sm flex gap-2 justify-start items-center border border-primary-50/50 rounded-lg px-2 py-1.5 focus:outline-1">
        <SearchIcon />
        <input className="w-full bg-transparent focus:outline-none shadow-none appearance-none "
          placeholder="Search products..." type="search" />
      </div>
    </form>
    <div>
      <div class="bg-primary-200/50 size-8 lg:size-12 rounded-full"></div>
    </div>
  </div>

</template>
