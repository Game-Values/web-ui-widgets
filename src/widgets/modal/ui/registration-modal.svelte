<script lang="ts">
import { AuthRegistrationByEmailForm } from "~/features/auth"

import { Modal, ShowModalButton } from "$ui/actions"
</script>

<Modal
    name="registration"
    class="w-96"
    contentClass="gap-y-4 flex flex-col"
    title="Sign Up"
>
    <AuthRegistrationByEmailForm />

    <p class="flex flex-col items-center">
        <small class="text-secondary">
            Already have an account on GameValues?
        </small>

        <ShowModalButton
            class="btn btn-link"
            modal="auth"
        >
            <small>
                Log in
            </small>
        </ShowModalButton>
    </p>
</Modal>
