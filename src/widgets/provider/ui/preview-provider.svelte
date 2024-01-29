<script lang="ts">
import { useState } from "$model/state"
import { Image } from "$ui/data"

let { state } = useState()
</script>

{#if $state.preview}
    <div
        class="
            absolute top-0 left-0
            w-full h-full max-h-31.25rem
        "
    >
        <div
            class="
                absolute top-0 left-0
                w-full h-32
                bg-gradient-to-b from-black
            "
        />

        <Image
            class="w-full h-full object-cover"
            lazy
            src={$state.preview}
        />
    </div>
{/if}
