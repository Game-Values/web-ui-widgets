<script lang="ts" setup>
import type { UnwrapRef } from "vue"

interface FormModel {
    email: string
}

let { recoveryPasswordModal } = useModals()

let formModel: UnwrapRef<FormModel> = reactive({
    email: "",
})
</script>

<template>
<v-modal v-model:active="recoveryPasswordModal.active">
    <v-form :model="formModel">
        <v-form-item>
            <v-title
                :level="3"
                class="text-center"
            >
                Password Recovery
            </v-title>
        </v-form-item>

        <v-form-item>
            <v-text disabled>
                Enter the email address associated with your Game Values account,
                and we will send you a link to reset your password.
            </v-text>
        </v-form-item>

        <v-form-item
            prop="email"
            required
        >
            <v-input placeholder="Email" />
        </v-form-item>

        <v-form-item>
            <v-form-submit block>
                Send
            </v-form-submit>
        </v-form-item>
    </v-form>
</v-modal>
</template>
