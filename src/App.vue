<script setup lang="ts">
import { computed, ref } from 'vue';

//components
import ArtistForm from './components/modules/Artist/components/ArtistForm.vue'
import ArtistList from './components/modules/Artist/components/ArtistList.vue'
import EditArtistForm from './components/modules/Artist/components/EditArtistForm.vue'
import NoArtist from './components/modules/Artist/components/NoArtist.vue'

//
import type { ArtistType } from './types/ArtistType';


const artistInitialState: ArtistType = {
  _id: '',
  name: '',
  bio: '',
  debut_year: 0,
  most_popular_song: '',
  songs: 0
}

const artists = ref<ArtistType[]>([]); // Datos iniciales

const formData = ref<ArtistType>(artistInitialState);
const isEditing = ref<boolean>(false)

const setEditing = (artist: ArtistType, set: boolean): void => {
  formData.value = set ? artist : artistInitialState
  isEditing.value = set ? true : false
};
const cancelEditing = () => {
  reset()
  isEditing.value = false
}

const reset = () => {
  formData.value._id = ''
  formData.value.name = ''
  formData.value.price = 0
  formData.value.offer_price = 0
  formData.value.description = ''
};

const addArtist = (newArtist: ArtistType) => {
  if (newArtist.name.trim() !== '') {
    const copiedProduct = { ...newArtist };
    artists.value.push(copiedProduct);
    // reset();
  };
};

const editArtist = (updatedProduct: ArtistType) => {
  console.log('updatedProduct', updatedProduct)
  // if (newProduct.name.trim() !== '') {
  //   const copiedProduct = { ...newProduct };
  //   products.value.push(copiedProduct);
  //   // reset();
  // };
};

const deleteArtist = (id: string) => {
  artists.value = artists.value.filter(a => a._id !== id);
};

const isNotEmpty = computed<boolean>(() => {
  return artists.value.length > 0 ? true : false
});
</script>

<template>
  <div id="app" class="pt-16 flex flex-col items-center justify-center gap-4 px-4">
    <div class="flex flex-col gap-2 md:gap-4 md:flex-row w-full">
      <div class="basis-full">
        <ArtistList v-if="isNotEmpty" :artists="artists" :deleteArtist="deleteArtist" :setEditing="setEditing" />
        <NoArtist v-else />
      </div>
      <div class="basis-full">
        <ArtistForm v-if="!isEditing" :formValues="formData" :addArtist="addArtist" />
        <EditArtistForm v-else :formValues="formData" :editArtist="editArtist" :setEditing="setEditing" />
      </div>

    </div>
  </div>
</template>