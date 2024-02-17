<script lang="ts">
import { AuthOnly } from "~/entities/auth"
import { DrawerMenu, DrawerToggle } from "~/widgets/drawer"

import { useSession } from "$model"
import { Divider } from "$ui/layout"

interface $$Slots {
    default: NonNullable<unknown>
}

let { authenticated } = useSession()
</script>

<div
    class="drawer h-[calc(100dvh-4rem)]"
    class:drawer-open={$authenticated}
>
    <input
        id="drawer"
        class="drawer-toggle"
        type="checkbox"
    />

    <AuthOnly>
        <aside
            class="
                drawer-side
                h-[inherit]
                bg-drawer
                overflow-visible
                shadow-[0.0625rem_0_0_0_rgba(255,255,255,0.08)]
            "
        >
            <label
                class="drawer-overlay label"
                aria-label="close drawer"
                for="drawer"
            />

            <DrawerToggle />

            <Divider />

            <DrawerMenu />
        </aside>
    </AuthOnly>

    <div class="drawer-content overflow-auto">
        <slot />
    </div>
</div>

<style>
.drawer-open > .drawer-side {
    @apply z-10;
    @apply overflow-visible;
}
</style>
