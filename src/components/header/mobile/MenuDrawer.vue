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
<ui-effect-drawer
    v-bind="$props"
    v-model:active="active"
    width="100%"
    closable
    @close="$emit('update:model-value', false)"
>
    <template #title>
        <ul
            class="
                flex
                gap-x-10
            "
        >
            <li>
                <ui-base-link type="primary">
                    <ui-typography-title :level="6">
                        Log In
                    </ui-typography-title>
                </ui-base-link>
            </li>

            <li>
                <ui-base-link type="primary">
                    <ui-typography-title :level="6">
                        Sign up
                    </ui-typography-title>
                </ui-base-link>
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
        <ui-base-link>
            <ui-typography-title :level="6">
                Blog
            </ui-typography-title>
        </ui-base-link>

        <ui-base-link>
            <ui-typography-title :level="6">
                Promotions
            </ui-typography-title>
        </ui-base-link>

        <ui-base-link>
            <ui-typography-title :level="6">
                TOP-10
            </ui-typography-title>
        </ui-base-link>

        <ui-base-link>
            <ui-typography-title :level="6">
                AI Assistant
            </ui-typography-title>
        </ui-base-link>
    </nav>
</ui-effect-drawer>
</template>
