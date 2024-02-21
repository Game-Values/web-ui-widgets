<script lang="ts">
import { useAuthByEmailForm } from "~/features/auth"

let { form } = useAuthByEmailForm()
</script>

<form
    class="form"
    use:form
>
    <div class="form-control">
        <input
            name="username"
            class="input input-bordered"
            placeholder="Email"
            required
            type="email"
        />
    </div>

    <div class="form-control">
        <input
            name="password"
            class="input input-bordered"
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
