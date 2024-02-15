<script lang="ts">
import { useAuthByEmailForm } from "~/features/auth"

let { form } = useAuthByEmailForm()
</script>

<form
    class="form"
    use:form
>
    <label class="form-control">
        <input
            name="username"
            class="input input-bordered"
            placeholder="Email"
            required
            type="email"
        />
    </label>

    <label class="form-control">
        <input
            name="password"
            class="input input-bordered"
            placeholder="Password"
            required
            type="password"
        />
    </label>

    <label class="form-control flex-row justify-between">
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
    </label>
</form>
