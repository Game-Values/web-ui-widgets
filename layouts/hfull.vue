<template>
  <div class="bg-gray-900 justify-center h-full">
    <slot name="header">
      <LayoutsHomeNavigation />
    </slot>
    <div class="justify-center bg-gray-900">
      <slot />
    </div>
    <slot name="footer" class="bg-gray-900">
      <LayoutsDefaultFooter />
    </slot>
  </div>
</template>
