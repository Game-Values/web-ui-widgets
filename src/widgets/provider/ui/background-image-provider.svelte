<script lang="ts">
import { useState } from "$model"
import { EnhancedImage } from "$ui/data"

let { state } = useState()
</script>

{#if $state.background}
    <EnhancedImage
        --height={$state.background.height}
        --width={$state.background.width}
        class="absolute z-0 left-0 top-0"
        alt="background-image"
        size="lg"
        src={$state.background.src}
    />
{/if}
