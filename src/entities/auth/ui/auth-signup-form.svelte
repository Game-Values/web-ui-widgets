<script lang="ts">
import Button from "@smui/button"
import Textfield from "@smui/textfield"

import { authSignupForm } from "~/entities/auth"
import { Form, FormField, PasswordField } from "~/shared/ui"
</script>

<Form>
    <FormField>
        <Textfield
            label="Nickname"
            required
            variant="outlined"
            bind:value={$authSignupForm.full_name}
        />
    </FormField>

    <FormField>
        <Textfield
            label="Email"
            required
            type="email"
            variant="outlined"
            bind:value={$authSignupForm.email}
        />
    </FormField>

    <FormField>
        <PasswordField
            required
            bind:value={$authSignupForm.password}
        />
    </FormField>

    <FormField>
        <PasswordField
            label="Repeat password"
            required
            bind:value={$authSignupForm.repeatPassword}
        />
    </FormField>

    <FormField>
        <slot name="signup" />
    </FormField>

    <FormField>
        
    </FormField>
</Form>
