<script lang="ts">
import { AuthByEmailForm } from "~/features/auth"

import { Modal, ShowModalButton } from "$ui/actions"
</script>

<Modal
    name="auth"
    class="w-96"
    contentClass="gap-y-4 flex flex-col"
    title="Sign In"
>
    <AuthByEmailForm />

    <div class="flex flex-col items-center">
        <small class="text-secondary">
            Don't have an account?
        </small>

        <ShowModalButton
            class="btn btn-link"
            modal="registration"
        >
            <small>
                Sign Up
            </small>
        </ShowModalButton>
    </div>
</Modal>
