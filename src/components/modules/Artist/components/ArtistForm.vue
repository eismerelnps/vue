<script setup lang="ts">
defineProps(['formValues', 'addArtist'])
</script>

<template>
  <form class="flex flex-col justify-start items-start gap-2 w-full max-w-xl">
    <label for="name_input"><span class="text-xl md:text-2xl lg:text-4xl text-red-500">Nuevo
        artista</span></label>



    <input id="id_input" class="px-2 py-1.5 rounded-md w-full" type="text" v-model="formValues._id"
      placeholder="Código">

    <input id="name_input" class="px-2 py-1.5 rounded-md w-full" type="text" v-model="formValues.name"
      placeholder="Nombre">
    <input id="debut_year" class="px-2 py-1.5 rounded-md w-full" type="number" v-model="formValues.debut_year"
      placeholder="Año de debut">

    <input id="songs" class="px-2 py-1.5 rounded-md w-full" type="number" v-model="formValues.songs"
      placeholder="Cantidad de canciones">

    <input id="bio" class="px-2 py-1.5 rounded-md w-full" type="text" v-model="formValues.bio" placeholder="Bio">

    <input id="most_popular_song" class="px-2 py-1.5 rounded-md w-full" type="text"
      v-model="formValues.most_popular_song" placeholder="Cancion mas popular">


    <button class="btn w-full text-red-500" @click.prevent="addArtist(formValues)">Agregar</button>
  </form>
</template>