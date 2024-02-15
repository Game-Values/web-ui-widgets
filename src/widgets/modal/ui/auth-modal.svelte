<script lang="ts">
import { AuthByEmailForm } from "~/features/auth"

import { Modal } from "$ui/actions"
</script>

<Modal
    name="auth"
    title="Sign In"
>
    <AuthByEmailForm />
</Modal>
