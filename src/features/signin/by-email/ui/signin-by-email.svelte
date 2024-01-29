<script lang="ts">
import { useSigninByEmailForm } from "~/features/signin"

import { Button } from "$ui/common"
import { Form, FormField, FormSubmit, PasswordInput, TextInput } from "$ui/data"

let { data, form } = useSigninByEmailForm()
</script>

<Form {form}>
    <FormField>
        <TextInput
            label="Email"
            required
            type="email"
            bind:value={$data.username}
        />
    </FormField>

    <FormField>
        <PasswordInput
            required
            bind:value={$data.password}
        />
    </FormField>

    <FormField class="flex justify-between">
        <FormSubmit>
            Sign In
        </FormSubmit>

        <Button
            class="text-sm font-normal"
            variant="text"
        >
            Forgot password?
        </Button>
    </FormField>
</Form>
