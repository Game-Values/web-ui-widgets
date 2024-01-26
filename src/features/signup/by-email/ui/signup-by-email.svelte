<script lang="ts">
import Button from "@smui/button"
import Checkbox from "@smui/checkbox"
import Textfield from "@smui/textfield"

import { SigninButton } from "~/entities/signin"
import { useSignupByEmailForm } from "~/features/signup"

import { Form, FormField, FormSubmit, PasswordField } from "$ui"

let { data, form } = useSignupByEmailForm()

let repeatPassword: string = ""

let sendNotifications: boolean = true

let agreeWithPolicies: boolean = true
</script>

<Form {form}>
    <FormField>
        <Textfield
            label="Nickname"
            required
            variant="outlined"
            bind:value={$data.full_name}
        />
    </FormField>

    <FormField>
        <Textfield
            label="Email"
            required
            type="email"
            variant="outlined"
            bind:value={$data.email}
        />
    </FormField>

    <FormField>
        <PasswordField
            required
            bind:value={$data.password}
        />
    </FormField>

    <FormField>
        <PasswordField
            label="Repeat password"
            required
            bind:value={repeatPassword}
        />
    </FormField>

    <FormField>
        <FormSubmit class="w-full">
            Sign Up
        </FormSubmit>
    </FormField>

    <FormField>
        <Checkbox bind:checked={sendNotifications} />

        <svelte:fragment slot="label">
            <small>
                I want to receive notifications about promotions and offers by email
            </small>
        </svelte:fragment>
    </FormField>

    <FormField>
        <Checkbox bind:checked={agreeWithPolicies} />

        <svelte:fragment slot="label">
            <small>
                By registering, you agree to the

                <Button
                    class="font-size-inherit font-normal button-link"
                    variant="text"
                >
                    License Agreement
                </Button>,

                <Button
                    class="font-size-inherit font-normal button-link"
                    variant="text"
                >
                    Privacy Policy
                </Button> and

                <Button
                    class="font-size-inherit font-normal button-link"
                    variant="text"
                >
                    Agency Agreement
                </Button>
            </small>
        </svelte:fragment>
    </FormField>

    <FormField class="flex flex-col">
        <small class="text-white/60">
            Already have an account on GameValues?
        </small>

        <SigninButton class="text-sm font-normal button-link" />
    </FormField>
</Form>
