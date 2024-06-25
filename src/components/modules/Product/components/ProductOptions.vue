<script setup lang="ts">
defineEmits(['onClick'])
</script>

<template>
  <button class="btn" @click="$emit('onClick')">
    <i>
      <slot name="icon"></slot>
    </i>
  </button>
</template>