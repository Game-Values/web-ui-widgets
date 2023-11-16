<template>
<ui-layout-space
    size="large"
    vertical
>
    <ui-base-link :to="useMainRoute().fullPath">
        <ui-base-icon
            custom="logo-uncolored"
            height="40"
            width="158"
        />
    </ui-base-link>

    <ui-base-link
        href="https://creativecommons.org/licenses/by-nc/3.0/"
        rel="license"
        target="_blank"
    >
        © 2023 GameValues
    </ui-base-link>
</ui-layout-space>
</template>
