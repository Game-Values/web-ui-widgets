<script lang="ts">
import { SigninButton } from "~/entities/signin"
import { useSignupByEmailForm } from "~/features/signup"

import { Button } from "$ui/common"
import {
    Checkbox,
    Form,
    FormField,
    FormSubmit,
    PasswordInput,
    TextInput,
} from "$ui/data"

let { data, form } = useSignupByEmailForm()

let repeatPassword: string = ""

let sendNotifications: boolean = true

let agreeWithPolicies: boolean = true
</script>

<Form {form}>
    <FormField>
        <TextInput
            label="Nickname"
            required
            bind:value={$data.full_name}
        />
    </FormField>

    <FormField>
        <TextInput
            label="Email"
            required
            type="email"
            bind:value={$data.email}
        />
    </FormField>

    <FormField>
        <PasswordInput
            required
            bind:value={$data.password}
        />
    </FormField>

    <FormField>
        <PasswordInput
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
                    class="font-size-inherit font-normal"
                    variant="text"
                >
                    License Agreement
                </Button>,

                <Button
                    class="font-size-inherit font-normal"
                    variant="text"
                >
                    Privacy Policy
                </Button> and

                <Button
                    class="font-size-inherit font-normal"
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

        <SigninButton class="text-sm font-normal" />
    </FormField>
</Form>
