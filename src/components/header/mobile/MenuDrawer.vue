<script lang="ts" setup>
let props = defineProps<{
    modelValue: boolean
}>()

let emit = defineEmits<{
    (e: "update:model-value", modelValue: boolean): void
}>()

let { storeClient } = useClients()
let { loginModal, registrationModal } = useModals()

let { authenticated } = storeToRefs(storeClient.meStore)

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

    <!-- todo: component -->
    <template #title>
        <template v-if="authenticated">
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
                        heroicons="heart-solid"
                        size="24"
                    />
                </ui-link>

                <widget-dropdown-user-menu />
            </v-space>
        </template>

        <template v-else>
            <v-space size="large">
                <v-button
                    text
                    type="primary"
                    @click="loginModal.show()"
                >
                    <v-title :level="6">
                        Log In
                    </v-title>
                </v-button>

                <v-button
                    text
                    type="primary"
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
