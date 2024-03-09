<script lang="ts">
import { useAuthRecoveryPasswordForm } from "~/features/auth"

import { Input } from "$ui/data"

let { form } = useAuthRecoveryPasswordForm()
</script>

<form
    class="form"
    use:form
>
    <div class="form-control">
        <Input
            name="email"
            inputClass="input-bordered"
            placeholder="Email"
            required
            type="email"
        />
    </div>

    <div class="form-control">
        <button
            class="btn btn-primary"
            type="submit"
        >
            Send
        </button>
    </div>
</form>
