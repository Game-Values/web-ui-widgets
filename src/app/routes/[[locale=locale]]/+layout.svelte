<script lang="ts">
import "uno.css"

import "~/app/assets/styles/index.css"
import { DefaultLayout } from "~/layouts"

interface $$Slots {
    default: NonNullable<unknown>
}
</script>

<DefaultLayout>
    <slot />
</DefaultLayout>
