<script lang="ts">
import { usePageState } from "$model"
import { EnhancedImage } from "$ui/data"

let { pageState } = usePageState()
</script>

{#if $pageState.backgroundImage}
    <EnhancedImage
        --image-height={$pageState.backgroundImageSize?.height}
        --image-width={$pageState.backgroundImageSize?.width}
        class="absolute z-0 left-0 top-0"
        alt="background-image"
        src={$pageState.backgroundImage}
    />
{/if}
