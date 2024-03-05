<script lang="ts">
import { AuthRecoveryPasswordForm } from "~/features/auth"

import { useModal } from "$model"
import { Modal } from "$ui/actions"

let { closeModal } = useModal("password-recovery")
</script>

<Modal
    name="password-recovery"
    class="w-96"
    contentClass="gap-y-4 flex flex-col"
    title="Password Recovery"
>
    <p class="text-secondary">
        <small>
            Enter the email address associated with your Game Values account,
            and we will send you a link to reset your password.
        </small>
    </p>

    <AuthRecoveryPasswordForm on:submit={closeModal} />
</Modal>
