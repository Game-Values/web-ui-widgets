<template>
  <div class="bg-gray-900 justify-center">
    <slot name="header">
      <LayoutsHomeNavigation />
    </slot>
    <slot />
    <slot name="footer">
      <LayoutsDefaultFooter />
    </slot>
  </div>
</template>
