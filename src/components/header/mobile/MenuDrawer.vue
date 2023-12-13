<script lang="ts" setup>
import type { WritableComputedRef } from "vue"

let props = defineProps<{
    modelValue: boolean
}>()

let emit = defineEmits<{
    (e: "update:model-value", modelValue: boolean): void
}>()

let { loginModal, registrationModal } = useModals()

let active: WritableComputedRef<boolean> = computed({
    get: (): boolean => props.modelValue,
    set: (modelValue: boolean): void => emit("update:model-value", modelValue),
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

    <!-- todo: component -->
    <template #title>
        <template v-if="isAuthenticated()">
            <v-space size="large">
                <ui-link>
                    <ui-icon
                        heroicons="shopping-cart"
                        size="24"
                    />
                </ui-link>

                <ui-link>
                    <ui-icon
                        heroicons="envelope"
                        size="24"
                    />
                </ui-link>

                <ui-link>
                    <ui-icon
                        heroicons="heart"
                        size="24"
                        solid
                    />
                </ui-link>

                <widget-dropdown-user-menu />
            </v-space>
        </template>

        <template v-else>
            <v-space size="large">
                <v-button
                    type="primary"
                    text
                    @click="loginModal.show()"
                >
                    <v-title :level="6">
                        Log In
                    </v-title>
                </v-button>

                <v-button
                    type="primary"
                    text
                    @click="registrationModal.show()"
                >
                    <v-title :level="6">
                        Sign up
                    </v-title>
                </v-button>
            </v-space>
        </template>
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
