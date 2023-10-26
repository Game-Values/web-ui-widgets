<template>
  <div class="bg-gray-900 justify-center h-full">
    <slot name="header">
      <LayoutsHomeNavigation />
    </slot>
    <div class="justify-center">
      <slot />
    </div>
    <slot name="footer">
      <LayoutsDefaultFooter />
    </slot>
  </div>
</template>
