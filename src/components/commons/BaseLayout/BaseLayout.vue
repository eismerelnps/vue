<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>

    <main class="pt-16 flex h-screen">
      <div class="basis-3/12">
        <slot name="drawer"></slot>
      </div>
      <div class="basis-9/12">
        <slot></slot>
      </div>
    </main>
  </div>
</template>