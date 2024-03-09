<script lang="ts">
import { useAuthByEmailForm } from "~/features/auth"

import { ShowModalButton } from "$ui/actions"
import { Input } from "$ui/data"

let { form } = useAuthByEmailForm()
</script>

<form
    class="form"
    use:form
>
    <div class="form-control">
        <Input
            name="username"
            inputClass="input-bordered"
            placeholder="Email"
            required
            type="email"
        />
    </div>

    <div class="form-control">
        <Input
            name="password"
            inputClass="input-bordered"
            placeholder="Password"
            required
            type="password"
        />
    </div>

    <div class="form-control form-control-row justify-between">
        <button
            class="btn btn-primary"
            type="submit"
        >
            Sign In
        </button>

        <ShowModalButton
            class="btn btn-link"
            modal="password-recovery"
            type="reset"
        >
            Forgot Password?
        </ShowModalButton>
    </div>
</form>
