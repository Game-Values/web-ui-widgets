<script lang="ts">
import { useRoute } from "$model"

let { route } = useRoute("copyright")
</script>

<a
    class="link link-hover"
    href={$route}
    target="_blank"
>
    <small>
        © 2024 GameValues
    </small>
</a>
