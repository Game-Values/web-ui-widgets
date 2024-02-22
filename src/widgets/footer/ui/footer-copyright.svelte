<script lang="ts">
import { useRoute } from "$model"

let { route } = useRoute("copyright")
</script>

<a
    class="link link-hover"
    href={$route}
    target="_blank"
>
    <samp>
        © 2024 GameValues
    </samp>
</a>
