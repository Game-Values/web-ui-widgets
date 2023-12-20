<script lang="ts" setup>
let emit = defineEmits<{
    (e: "message", message: string): void
}>()

let formModel = reactive({
    message: "",
})

function sendMessage(): void {
    if (!formModel.message)
        return

    emit("message", formModel.message)
    useSet(formModel, "message", "")
}
</script>

<template>
<v-form
    :model="formModel"
    all-required
    @submit.prevent="sendMessage()"
>
    <v-form-item>
        <v-space class="[&>*:first-child]:(flex-1)">
            <v-form-item
                prop="message"
                pure
            >
                <v-input placeholder="Enter message text">
                    <template #prefix>
                        <ui-icon
                            heroicons="paper-clip"
                            size="24"
                        />
                    </template>
                </v-input>
            </v-form-item>

            <v-form-item pure>
                <v-form-submit @submit="sendMessage()">
                    <ui-icon
                        heroicons="paper-airplane-solid"
                        size="24"
                    />
                </v-form-submit>
            </v-form-item>
        </v-space>
    </v-form-item>
</v-form>
</template>
