<script lang="ts">
import { navbarLinks, NavbarTab } from "~/widgets/navbar"

interface $$Props {
    class?: string
}

let className: string = ""

export {
    className as class,
}
</script>

<nav class="h-full">
    <ul
        class="
            tabs tabs-bordered
            h-[calc(100%+0.5rem*2)]
            items-center
            uppercase
            {className}
        "
        role="tablist"
    >
        {#each navbarLinks as navbarLink (navbarLink.label)}
            <NavbarTab tab={navbarLink} />
        {/each}
    </ul>
</nav>
