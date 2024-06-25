<script setup lang="ts">
//icons
import HomeIcon from '@/components/icons/HomeIcon.vue';
import InboxStackIcon from '@/components/icons/InboxStackIcon.vue'
import PlusCircleIcon from '@/components/icons/PlusCircleIcon.vue'
//componetns
import DrawerItem from '@/components/commons/Drawer/DrawerItem.vue';
const drawer_options = [
  {
    icon: HomeIcon,
    heading: 'Inicio'
  },
  {
    icon: InboxStackIcon,
    heading: 'Inventario'
  },
  {
    icon: PlusCircleIcon,
    heading: 'Nuevo producto'
  }
]
</script>

<template>
  <div class="w-full h-full p-2 flex flex-col gap-2 bg-primary-50 dark:bg-primary-950/5 border-e border-primary-50/10">
    <DrawerItem v-for="(option, index) in drawer_options" :key="index">
      <template #icon>
        <component :is="option.icon" />
      </template>
      <template #heading>{{ option.heading }}</template>
    </DrawerItem>
  </div>
</template>