<script lang="ts">
import { Currency } from "$lib/enums"
import { useSession } from "$model"
import { Input, Select, Toggle } from "$ui/data"

let { user } = useSession()
</script>

<form class="form">
    <div class="form-control">
        <Input
            disabled
            inputClass="input-bordered"
            placeholder="Nickname"
            required
            value={$user.full_name}
        />
    </div>

    <div class="form-control">
        <Input
            disabled
            inputClass="input-bordered"
            placeholder="Email"
            required
            type="email"
            value={$user.email}
        />
    </div>

    <div class="form-control">
        <Select
            options={[{ label: "Country", value: "Country" }]}
            placeholder="Country"
            required
        />
    </div>

    <div class="form-control">
        <Select
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
