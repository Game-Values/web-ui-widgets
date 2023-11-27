<script lang="ts" setup>
import type { BodyLoginWithOauth2ApiV1LoginOauthPostRaw } from "#schema/data-contracts"
import type { UnwrapRef } from "vue"

let { authController } = useControllers()
let { loginModal, recoveryPasswordModal, registrationModal } = useModals()

let formModel: UnwrapRef<BodyLoginWithOauth2ApiV1LoginOauthPostRaw> = reactive({
    password: "",
    username: "",
})
</script>

<template>
<v-modal v-model:active="loginModal.active">
    <v-form :model="formModel">
        <v-form-item>
            <v-title
                :level="3"
                class="text-center"
            >
                Log In
            </v-title>
        </v-form-item>

        <v-form-item
            prop="username"
            required
        >
            <v-input placeholder="Email" />
        </v-form-item>

        <v-form-item
            prop="password"
            required
        >
            <v-input
                placeholder="Password"
                plain-password
                type="password"
            />
        </v-form-item>

        <v-form-item>
            <v-space
                justify="space-between"
            >
                <v-form-submit
                    @submit="(
                        authController.login(formModel)
                            .then((): void => reloadNuxtApp())
                    )"
                >
                    Sign In
                </v-form-submit>

                <v-button
                    text
                    type="primary"
                    @click="recoveryPasswordModal.show()"
                >
                    Forgot Password?
                </v-button>
            </v-space>
        </v-form-item>

        <v-form-item>
            <v-space
                align="center"
                justify="center"
                size="small"
            >
                <v-text disabled>
                    Don't have an account?
                </v-text>

                <v-button
                    text
                    type="primary"
                    @click="registrationModal.show()"
                >
                    Sign Up
                </v-button>
            </v-space>
        </v-form-item>
    </v-form>
</v-modal>
</template>
