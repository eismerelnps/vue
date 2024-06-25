<template>
  <div class="flex justify-start items-center gap-2 px-2 py-2 hover:bg-primary-200/20 rounded-md">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="justify-start ">
      <h3 class="text-md md:text-lg lg:text-xl">
        <slot name="heading"></slot>
      </h3>
    </div>
  </div>
</template>