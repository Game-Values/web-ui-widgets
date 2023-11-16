<script lang="ts" setup>
import { SocialType } from "~/enums"
</script>

<template>
<ui-layout-space
    align="center"
    size="large"
>
    <template
        v-for="socialType in SocialType"
        :key="socialType"
    >
        <ui-base-icon
            :custom="useToLower(socialType)"
            size="40"
        />
    </template>
</ui-layout-space>
</template>
