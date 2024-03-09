<script lang="ts">
import Textfield from "@smui/textfield"

import { SignupButton } from "~/entities/signup"
import { useSigninByEmailForm } from "~/features/auth"

import { Form, FormField, FormSubmit, PasswordField } from "$chat-send-hub-message"

let { data, form } = useSigninByEmailForm()
</script>

<Form {form}>
    <FormField>
        <Textfield
            label="Email"
            required
            type="email"
            variant="outlined"
            bind:value={$data.username}
        />
    </FormField>

    <FormField>
        <PasswordField
            required
            bind:value={$data.password}
        />
    </FormField>

    <FormField class="flex justify-between">
        <FormSubmit>
            Sign In
        </FormSubmit>

        <SignupButton class="text-sm font-normal button-link">
            Forgot password?
        </SignupButton>
    </FormField>
</Form>
