<script lang="ts" setup>
import type { BodyCreateUserProfileApiV1UsersPostRaw } from "#schema/data-contracts"
import type { ComputedRef, UnwrapRef } from "vue"

// todo: auth store
interface FormModel extends BodyCreateUserProfileApiV1UsersPostRaw {
    agreeWithPolicies: boolean
    repeatPassword: string
    sendNotifications: boolean
}

let { routerClient } = useClients()
let { authController } = useControllers()
let { loginModal, registrationModal } = useModals()
let { userRegisteredToast } = useToasts()

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

async function handleRegistration(): Promise<void> {
    await authController.registration(getRef(registrationPayload))

    // todo: mv to controller
    await userRegisteredToast.open({
        toast: {
            onClose: async (): Promise<void> => {
                await authController.login({
                    password: getRef(registrationPayload, "password"),
                    username: getRef(registrationPayload, "email"),
                })

                await navigateTo(routerClient.getRoute(routerClient.routeNames.MAIN), {
                    open: {
                        target: "_self",
                    },
                })
            },
        },
    })
}
</script>

<template>
<v-modal v-model:active="registrationModal.active">
    <v-form
        :model="formModel"
        all-required
    >
        <v-form-item>
            <v-title
                :level="3"
                class="text-center"
            >
                Registration
            </v-title>
        </v-form-item>

        <v-form-item prop="full_name">
            <v-input placeholder="Nickname" />
        </v-form-item>

        <v-form-item prop="email">
            <v-input placeholder="Email" />
        </v-form-item>

        <v-form-item prop="password">
            <v-input
                placeholder="Password"
                type="password"
                plain-password
            />
        </v-form-item>

        <v-form-item prop="repeatPassword">
            <v-input
                placeholder="Repeat password"
                type="password"
                plain-password
            />
        </v-form-item>

        <v-form-item action>
            <v-form-submit
                :disabled="!formModel.agreeWithPolicies"
                block
                @submit="handleRegistration()"
            >
                Registration
            </v-form-submit>
        </v-form-item>

        <v-form-item prop="sendNotifications">
            <v-checkbox>
                <v-text disabled>
                    I want to receive notifications about promotions and offers by email
                </v-text>
            </v-checkbox>
        </v-form-item>

        <v-form-item prop="agreeWithPolicies">
            <v-checkbox>
                <v-text disabled>
                    By registering, ou agree to the

                    <ui-link
                        :to="routerClient.getRoute(routerClient.routeNames.POLICY_LICENSE)"
                        type="primary"
                    >
                        License Agreement
                    </ui-link>

                    ,

                    <ui-link
                        :to="routerClient.getRoute(routerClient.routeNames.POLICY_PRIVACY)"
                        type="primary"
                    >
                        Privacy Policy
                    </ui-link>

                    and

                    <ui-link
                        :to="routerClient.getRoute(routerClient.routeNames.POLICY_AGREEMENT)"
                        type="primary"
                    >
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
                    type="primary"
                    text
                    @click="loginModal.show()"
                >
                    Log In
                </v-button>
            </v-space>
        </v-form-item>
    </v-form>
</v-modal>
</template>
