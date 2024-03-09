<script lang="ts">
import { Input } from "$ui/data"
</script>

<div class="gap-y-3 flex flex-col">
    <h1>
        Have questions?
    </h1>

    <p>
        Leave your email, and we'll contact you
    </p>

    <form class="form">
        <div class="form-control form-control-row">
            <Input
                name="question"
                placeholder="Your question"
                required
            />

            <button
                class="btn btn-primary"
                type="submit"
            >
                Send
            </button>
        </div>
    </form>
</div>
