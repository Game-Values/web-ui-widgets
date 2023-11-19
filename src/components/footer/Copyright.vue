<template>
<v-space
    size="large"
    vertical
>
    <ui-link :to="useMainRoute().fullPath">
        <ui-icon
            custom="logo-uncolored"
            height="40"
            width="158"
        />
    </ui-link>

    <ui-link
        href="https://creativecommons.org/licenses/by-nc/3.0/"
        rel="license"
        target="_blank"
    >
        © 2023 GameValues
    </ui-link>
</v-space>
</template>
