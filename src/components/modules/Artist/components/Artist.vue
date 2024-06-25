<script setup lang="ts">
import EditIcon from '../../../icons/EditIcon.vue'
import TrashIcon from '../../../icons/TrashIcon.vue'
import ArtistOptions from './ArtistOptions.vue'
import type { ArtistType } from '@/types/ArtistType';

type PropsType = {
  artist: ArtistType,
  deleteArtist: (id: string) => void,
  setEditing: (product: ArtistType, set: boolean) => void
}
const props = defineProps<PropsType>();
</script>

<template>
  <div class="px-2 py-1.5 border rounded-lg w-full max-w-xl flex flex-col justify-start  gap-2">
    <div>
      <div class="w-full h-44 bg-slate-400"></div>
    </div>

    <div class=" basis-full flex flex-col justify-start h-full">

      <div>
        <p class="opacity-70">Nombre:</p>
        <h2 class="text-xl md:text-2xl lg:text-4xl font-semibold">{{ artist.name }}</h2>
      </div>

      <p class="opacity-70">{{ artist.bio }}</p>

      <div class="flex flex-row justify-start items-center gap-2">
        <p>{{
          artist.debut_year }}</p>
        <p v-if="artist.most_popular_song" class="text-red-500">{{ artist.most_popular_song }}</p>
      </div>

      <div>
        <p class="opacity-70">Canción más popular:</p>
        <p class="text-lg">{{ artist.most_popular_song }}</p>
      </div>

    </div>

    <div class="basis-full flex gap-2 items-center justify-center ">
      <ArtistOptions @onClick="() => setEditing(artist, true)">
        <template #icon>
          <div class="flex gap-2 justify-center items-center">
            <EditIcon />
            <p>Editar</p>

          </div>
        </template>
      </ArtistOptions>
      <ArtistOptions @onClick="() => deleteArtist(artist._id)">
        <template #icon>
          <div class="flex gap-2 justify-center items-center text-red-500">
            <TrashIcon />
            <p>Borrar</p>
          </div>
        </template>
      </ArtistOptions>
    </div>
  </div>
</template>
