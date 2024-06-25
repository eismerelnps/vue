<script setup lang="ts">
import type { ProductType } from '@/types/ProductType';
import EditIcon from '../../../icons/EditIcon.vue'
import TrashIcon from '../../../icons/TrashIcon.vue'
import ProductOptions from './ProductOptions.vue'

type PropsType = {
  product: ProductType,
  deleteProduct: (productId: string) => void,
  setEditing: (product: ProductType, set: boolean) => void
}
const props = defineProps<PropsType>();
</script>

<template>
  <div class="px-2 py-1.5 border rounded-lg w-full max-w-xl flex justify-start  gap-2">
    <div>
      <div class="size-24 bg-slate-400 rounded-full"></div>
    </div>

    <div class=" basis-full flex flex-col justify-start h-full">
      <h2 class="text-xl font-semibold">{{ product.name }}</h2>
      <div class="flex flex-row justify-start items-center gap-2">
        <p :class="{ 'text-gray-500 line-through': product.offer_price, 'text-green-500': !product.offer_price }">${{
          product.price }}</p>
        <p v-if="product.offer_price" class="text-green-500">{{ product.offer_price }}</p>
      </div>
      <p class="opacity-70">{{ product.description }}</p>

    </div>

    <div class="basis-full flex flex-col gap-2 items-end justify-end ">
      <ProductOptions @onClick="() => setEditing(product, true)">
        <template #icon>
          <EditIcon />
        </template>
      </ProductOptions>
      <ProductOptions @onClick="() => deleteProduct(product._id)">
        <template #icon>
          <TrashIcon />
        </template>
      </ProductOptions>
    </div>
  </div>
</template>
