<script lang="ts">
import { AuthOnly } from "~/entities/auth"
import { DrawerMenu, DrawerToggle } from "~/widgets/drawer"

import { Divider } from "$ui/layout"

interface $$Slots {
    default: NonNullable<unknown>
}
</script>

<div
    class="
        drawer drawer-open
        h-[calc(100dvh-4rem)]
    "
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
                class="drawer-overlay"
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
    @apply overflow-visible;
}
</style>
