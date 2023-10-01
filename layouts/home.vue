<template>
    <div class="bg-black">
        <slot name="header" >
            <LayoutsHomeNavigation />
        </slot>
        <slot />
        <slot name="footer" >
            <LayoutsDefaultFooter />
        </slot>
    </div>
</template>
