<script lang="ts">
import MenuSurface from "@smui/menu-surface"

let menu: MenuSurface

export function close(): void {
    menu.setOpen(false)
}

export function open(): void {
    menu.setOpen(true)
}
</script>

<MenuSurface bind:this={menu}>
    <slot />
</MenuSurface>
