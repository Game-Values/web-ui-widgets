<script lang="ts">
import Button from "@smui/button"
import Checkbox from "@smui/checkbox"
import Textfield from "@smui/textfield"

import { authSignupForm } from "~/entities/auth"
import { Form, FormField, PasswordField } from "~/shared/chat-send-hub-message-form"
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

    <FormField smui>
        <Checkbox
            bind:checked={$authSignupForm.sendNotifications}
        />

        <svelte:fragment slot="label">
            <small>
                I want to receive notifications about promotions and offers by email
            </small>
        </svelte:fragment>
    </FormField>

    <FormField smui>
        <Checkbox
            bind:checked={$authSignupForm.agreeWithPolicies}
        />

        <svelte:fragment slot="label">
            <small>
                By registering, ou agree to the

                <Button
                    class="font-size-inherit font-normal button-link"
                    href="/"
                    variant="text"
                >
                    License Agreement
                </Button>,

                <Button
                    class="font-size-inherit font-normal button-link"
                    href="/"
                    variant="text"
                >
                    Privacy Policy
                </Button> and

                <Button
                    class="font-size-inherit font-normal button-link"
                    href="/"
                    variant="text"
                >
                    Agency Agreement
                </Button>
            </small>
        </svelte:fragment>
    </FormField>
</Form>
