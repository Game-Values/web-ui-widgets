<script lang="ts">
import { RouteExternal } from "$lib/enums"
import { Button } from "$ui/common"
</script>

<Button
    class="text-sm font-normal"
    color="secondary"
    href={RouteExternal.COPYRIGHT_LICENSE}
    target="_blank"
    variant="text"
>
    © {new Date().getFullYear()} GameValues
</Button>
