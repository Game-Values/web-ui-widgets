<script lang="ts">
import { usePageState } from "$model"
import { EnhancedImage } from "$ui/data"

let { pageState } = usePageState()
</script>

{#if $pageState.background}
    <EnhancedImage
        --image-height={$pageState.background.height}
        --image-width={$pageState.background.width}
        class="absolute z-0 left-0 top-0"
        alt="background-image"
        src={$pageState.background.src}
    />
{/if}
