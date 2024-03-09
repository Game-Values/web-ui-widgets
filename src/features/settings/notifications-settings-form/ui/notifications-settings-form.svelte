<script lang="ts">
import { Toggle } from "$ui/data"
</script>

<form class="form">
    <div class="form-control">
        <Toggle
            checked
            inputClass="toggle-success"
        >
            <span class="text-secondary">
                Purchases and sales
            </span>
        </Toggle>
    </div>

    <div class="form-control">
        <Toggle
            checked
            inputClass="toggle-success"
        >
            <span class="text-secondary">
                Chat Messages
            </span>
        </Toggle>
    </div>

    <div class="form-control">
        <Toggle
            checked
            inputClass="toggle-success"
        >
            <span class="text-secondary">
                Mailing GameValues
            </span>
        </Toggle>
    </div>
</form>

<style>
.form-control {
    @apply p-4;
    @apply bg-white/[0.02] rounded-lg;
}
</style>
