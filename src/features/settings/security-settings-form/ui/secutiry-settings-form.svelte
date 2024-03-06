<script lang="ts">
import { useUserForm } from "~/features/user"

import { Input } from "$ui/data"

let { form } = useUserForm()
</script>

<form
    class="form"
    use:form
>
    <div class="form-control">
        <Input
            name="original"
            inputClass="input-bordered"
            placeholder="Old password"
            required
            type="password"
        />
    </div>

    <div class="form-control">
        <Input
            name="password"
            inputClass="input-bordered"
            placeholder="New password"
            required
            type="password"
        />
    </div>

    <div class="form-control">
        <Input
            name="password"
            inputClass="input-bordered"
            placeholder="New password again"
            required
            type="password"
        />
    </div>

    <div class="form-control">
        <button
            class="btn btn-primary"
            type="submit"
        >
            Save
        </button>
    </div>
</form>
