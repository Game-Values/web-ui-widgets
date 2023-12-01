<script lang="ts" setup>
import type { BodyCreateUserProfileApiV1UsersPostRaw } from "#schema/data-contracts"
import type { ComputedRef, UnwrapRef } from "vue"

// todo: auth store
interface FormModel extends BodyCreateUserProfileApiV1UsersPostRaw {
    agreeWithPolicies: boolean
    repeatPassword: string
    sendNotifications: boolean
}

let { authController } = useControllers()
let { loginModal, registrationModal } = useModals()

let formModel: UnwrapRef<FormModel> = reactive({
    agreeWithPolicies: true,
    email: "",
    full_name: "",
    password: "",
    repeatPassword: "",
    sendNotifications: true,
})

let registrationPayload: ComputedRef<BodyCreateUserProfileApiV1UsersPostRaw> = (
    computed((): BodyCreateUserProfileApiV1UsersPostRaw => (
        usePick(formModel, [
            "email",
            "full_name",
            "password",
        ])
    ))
)
</script>

<template>
<v-modal v-model:active="registrationModal.active">
    <v-form :model="formModel">
        <v-form-item>
            <v-title
                :level="3"
                class="text-center"
            >
                Registration
            </v-title>
        </v-form-item>

        <v-form-item
            prop="full_name"
            required
        >
            <v-input placeholder="Fullname" />
        </v-form-item>

        <v-form-item
            prop="email"
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

        <v-form-item
            prop="repeatPassword"
            required
        >
            <v-input
                placeholder="Repeat password"
                plain-password
                type="password"
            />
        </v-form-item>

        <v-form-item>
            <v-form-submit
                :disabled="!formModel.agreeWithPolicies"
                block
                @submit="(
                    authController.registration(registrationPayload)
                        // .then((): void => reloadNuxtApp())
                )"
            >
                Registration
            </v-form-submit>
        </v-form-item>

        <v-form-item
            prop="sendNotifications"
            required
        >
            <v-checkbox>
                <v-text disabled>
                    I want to receive notifications about promotions and offers by email
                </v-text>
            </v-checkbox>
        </v-form-item>

        <v-form-item
            prop="agreeWithPolicies"
            required
        >
            <v-checkbox>
                <v-text disabled>
                    By registering, ou agree to the

                    <ui-link type="primary">
                        License Agreement
                    </ui-link>

                    ,

                    <ui-link type="primary">
                        Privacy Policy
                    </ui-link>

                    and

                    <ui-link type="primary">
                        Agency Agreement
                    </ui-link>
                </v-text>
            </v-checkbox>
        </v-form-item>

        <v-form-item>
            <v-space
                align="center"
                justify="center"
                size="small"
                vertical
            >
                <v-text disabled>
                    Already have an account on GameValues?
                </v-text>

                <v-button
                    text
                    type="primary"
                    @click="loginModal.show()"
                >
                    Log In
                </v-button>
            </v-space>
        </v-form-item>
    </v-form>
</v-modal>
</template>
