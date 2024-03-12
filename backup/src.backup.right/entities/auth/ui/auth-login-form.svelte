<script lang="ts">
import Button from "@smui/button"
import Textfield from "@smui/textfield"

import { authByOauth2Form } from "~/entities/auth"
import { Form, FormField, PasswordField } from "~/shared/chat-send-hub-message-form"
</script>

<Form>
    <FormField>
        <Textfield
            label="Email"
            required
            type="email"
            variant="outlined"
            bind:value={$authByOauth2Form.username}
        />
    </FormField>

    <FormField>
        <PasswordField
            required
            bind:value={$authByOauth2Form.password}
        />
    </FormField>

    <FormField class="flex items-center justify-between">
        <div class="flex-1">
            <slot name="auth" />
        </div>

        <div class="flex-1 text-right">
            <Button
                class="text-normal text-nowrap"
                variant="text"
            >
                Forgot Password?
            </Button>
        </div>
    </FormField>
</Form>
