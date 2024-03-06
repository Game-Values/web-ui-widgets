<script lang="ts">
import { useUserForm } from "~/features/user"

import { Currency } from "$lib/enums"
import { Input, Select, Toggle } from "$ui/data"

let { form } = useUserForm()
</script>

<form
    class="form"
    use:form
>
    <div class="form-control">
        <Input
            name="full_name"
            disabled
            inputClass="input-bordered"
            placeholder="Nickname"
            required
        />
    </div>

    <div class="form-control">
        <Input
            name="email"
            disabled
            inputClass="input-bordered"
            placeholder="Email"
            required
            type="email"
        />
    </div>

    <div class="form-control">
        <Select
            name="attributes.country"
            options={[{ label: "USA", value: "USA" }]}
            placeholder="Country"
            required
        />
    </div>

    <div class="form-control">
        <Select
            name="attributes.currency"
            options={Object.entries(Currency).map(([label, value]) => ({ label, value }))}
            placeholder="Currency"
            required
        />
    </div>

    <div class="form-control">
        <Toggle
            checked
            inputClass="toggle-success"
        >
            <span class="text-secondary">
                Show the amount of my transactions to other users
            </span>
        </Toggle>
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
