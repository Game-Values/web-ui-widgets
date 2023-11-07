<template>
<div class="bg-gray-900 justify-center h-full">
    <slot name="header">
        <layouts-home-navigation/>
    </slot>
    <div class="justify-center bg-gray-900">
        <slot/>
    </div>
    <slot class="bg-gray-900" name="footer">
        <layouts-default-footer/>
    </slot>
</div>
</template>
