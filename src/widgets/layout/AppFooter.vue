<script lang="ts" setup>
let breakpoint = useBreakpoint()

let isMobileMenuActive = ref(false)
</script>

<template>
<ui-layout-content
    :class="`h-footer-${breakpoint}`"
    tag="footer"
>
    <ui-layout-row>
        <ui-layout-col
            :lg="5"
            :md="6"
            :sm="8"
            :xs="12"
        >
            <ui-base-link :to="useMainRoute().fullPath">
                <ui-base-icon
                    custom="logo-uncolored"
                    height="40"
                    width="158"
                />
            </ui-base-link>
        </ui-layout-col>


    </ui-layout-row>
</ui-layout-content>
</template>
