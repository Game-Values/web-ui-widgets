<template>
<div class="bg-gray-900 justify-center">
    <slot name="header">
        <layouts-home-navigation/>
    </slot>
    <slot/>
    <slot name="footer">
        <layouts-default-footer/>
    </slot>
</div>
</template>
