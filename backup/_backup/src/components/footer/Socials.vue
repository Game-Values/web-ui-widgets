<script lang="ts" setup>
import { SocialType } from "~/enums"
</script>

<template>
<v-space
    align="center"
    size="large"
>
    <template
        v-for="socialType in SocialType"
        :key="socialType"
    >
        <ui-icon
            :custom="useToLower(socialType)"
            size="40"
        />
    </template>
</v-space>
</template>
