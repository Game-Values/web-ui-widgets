<script lang="ts">
import { useAuthByEmailForm } from "~/features/auth"

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

        <button
            class="btn btn-link"
            type="reset"
        >
            Forgot Password?
        </button>
    </div>
</form>
