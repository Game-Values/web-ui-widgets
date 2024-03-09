<script lang="ts">
import { useChatSendHubMessageForm } from "~/features/chat"

import { Input } from "$ui/data"

import IconPaperAirplaneSolid from "virtual:icons/heroicons/paper-airplane-solid"

interface $$Events {
    message: CustomEvent<string>
}

let { form } = useChatSendHubMessageForm()
</script>

<form
    class="form"
    use:form
>
    <div class="form-control form-control-row">
        <Input
            name="message"
            placeholder="Enter message text"
            required
        />

        <button
            class="btn btn-primary btn-square"
            type="submit"
        >
            <IconPaperAirplaneSolid />
        </button>
    </div>
</form>
