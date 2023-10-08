<template>
  <div class="bg-gray-900 justify-center bg-transparent">
    <GamesBgImg>
      <slot name="header" >
        <LayoutsHomeNavigation />
      </slot>
      <slot />
    </GamesBgImg>
    <slot name="footer">
      <LayoutsDefaultFooter />
    </slot>
  </div>
</template>
<style>
html, body {
  background-color: #000;
}
</style>
