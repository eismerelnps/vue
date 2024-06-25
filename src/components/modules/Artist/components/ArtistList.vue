<script setup lang="ts">

defineProps(['artists', 'deleteArtist','setEditing'])
// defineEmits(['setEditing'])

import Artist from './Artist.vue'


</script>

<template>
  <ul class="flex flex-col gap-2 items-center justify-center w-full">
    <Artist v-for="(current_artist, index) in artists" :key="index" :artist="current_artist"
      :deleteArtist="deleteArtist" :setEditing="setEditing" />
  </ul>
</template>