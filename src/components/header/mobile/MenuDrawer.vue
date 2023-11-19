<script lang="ts" setup>
let props = defineProps<{
    modelValue: boolean
}>()

let emit = defineEmits<{
    (e: "update:model-value", modelValue: boolean): void
}>()

let active = computed({
    get: () => props.modelValue,
    set: (modelValue: number) => emit("update:model-value", modelValue),
})
</script>

<template>
<v-drawer
    v-bind="$props"
    v-model:active="active"
    width="100%"
    closable
    @close="$emit('update:model-value', false)"
>
    <template #close>
        <ui-icon
            heroicons="x-mark"
            size="24"
        />
    </template>

    <template #title>
        <ul
            class="
                flex
                gap-x-10
            "
        >
            <li>
                <ui-link type="primary">
                    <v-title :level="6">
                        Log In
                    </v-title>
                </ui-link>
            </li>

            <li>
                <ui-link type="primary">
                    <v-title :level="6">
                        Sign up
                    </v-title>
                </ui-link>
            </li>
        </ul>
    </template>

    <!-- todo: component & i18n -->
    <nav
        class="
            flex-col
            gap-y-10
        "
    >
        <ui-link>
            <v-title :level="6">
                Blog
            </v-title>
        </ui-link>

        <ui-link>
            <v-title :level="6">
                Promotions
            </v-title>
        </ui-link>

        <ui-link>
            <v-title :level="6">
                TOP-10
            </v-title>
        </ui-link>

        <ui-link>
            <v-title :level="6">
                AI Assistant
            </v-title>
        </ui-link>
    </nav>
</v-drawer>
</template>
