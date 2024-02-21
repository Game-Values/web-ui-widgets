<script lang="ts">
import { useRoute } from "$model"
import { EnhancedImage } from "$ui/data"

let { route } = useRoute("/")
</script>

<a
    class="
        btn btn-link
        relative bottom-1
    "
    href={$route}
>
    <EnhancedImage
        alt="logo"
        size="xs"
        src="images/common/logo-grayscale.png"
    />
</a>
