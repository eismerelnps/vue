<script setup lang="ts">
defineProps(['formValues', 'addProduct'])
</script>

<template>
  <form class="flex flex-col justify-start items-start gap-2 w-full max-w-xl">
    <label for="name_input"><span class="text-xl md:text-2xl lg:text-4xl text-green-500">Registrar nuevo
        producto</span></label>
    
    
    
        <input id="id_input" class="px-2 py-1.5 rounded-md w-full" type="text" v-model="formValues._id"
      placeholder="Código">

    <input id="name_input" class="px-2 py-1.5 rounded-md w-full" type="text" v-model="formValues.name"
      placeholder="Nombre">
    <input id="price_input" class="px-2 py-1.5 rounded-md w-full" type="number" v-model="formValues.price"
      placeholder="Precio">
    <input id="offer_input" class="px-2 py-1.5 rounded-md w-full" type="number" v-model="formValues.offer_price"
      placeholder="Precio de oferta">
    <input id="description_input" class="px-2 py-1.5 rounded-md w-full" type="text" v-model="formValues.description"
      placeholder="Descripcion">
    <button class="btn w-full text-green-500" @click.prevent="addProduct(formValues)">Agregar</button>
  </form>
</template>