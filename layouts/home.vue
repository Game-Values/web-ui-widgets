<template>
    <div class="bg-gray-900">
        <slot name="header" >
            <LayoutsHomeNavigation />
        </slot>
        <slot />
        <slot name="footer" >
            <LayoutsDefaultFooter />
        </slot>
    </div>
</template>
