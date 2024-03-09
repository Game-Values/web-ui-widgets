<script lang="ts">
import { useRoute } from "$model"
import { EnhancedImage } from "$ui/data"

interface $$Props {
    class?: string
}

let className: string = ""

let { route } = useRoute("/")

export {
    className as class,
}
</script>

<a
    class="
        btn btn-link
        relative bottom-1
        {className}
    "
    href={$route}
>
    <EnhancedImage
        alt="logo"
        size="xs"
        src="images/common/logo.png"
    />
</a>
