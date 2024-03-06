<script lang="ts">
import { Checkbox, Input } from "$ui/data"
</script>

<form class="form">
    <p class="text-secondary">
        <small>
            Bind your phone number and any changes to personal data
            will be available via a special code from Telegram.
        </small>
    </p>

    <div class="form-control">
        <Input
            inputClass="input-bordered"
            placeholder="Phone Number"
            required
            type="tel"
        />
    </div>

    <div class="form-control">
        <Checkbox
            checked
            inputClass="checkbox-xs checkbox-primary"
        >
            <span class="text-sm text-secondary">
                Log in to the platform with a one-time password in Telegram
            </span>
        </Checkbox>
    </div>

    <p class="text-secondary">
        <small>
            Specify your Telegram nickname so that the support team can quickly contact you
        </small>
    </p>

    <div class="form-control">
        <Input
            inputClass="input-bordered"
            placeholder="Telegram nickname"
            required
        >
            <svelte:fragment slot="icon">
                <span class="text-secondary">
                    @
                </span>
            </svelte:fragment>
        </Input>
    </div>

    <div class="form-control">
        <button
            class="btn btn-primary"
            type="submit"
        >
            Connect
        </button>
    </div>
</form>
