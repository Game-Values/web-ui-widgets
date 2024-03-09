<script lang="ts">
import { navbarStats } from "~/widgets/navbar"
</script>

<ul
    class="
        stats
        relative top-0.5
        gap-x-4
        text-sm
        overflow-hidden
    "
>
    {#each navbarStats as navbarStat (navbarStat.label)}
        <li class="stat p-0 gap-x-3 border-transparent">
            <span class="stat-figure col-start-1 text-accent text-3xl">
                <i class="icon {navbarStat.iconClass}">
                    <svelte:component this={navbarStat.icon} />
                </i>
            </span>

            <span class="stat-value col-start-2">
                <strong>
                    {navbarStat.value}
                </strong>
            </span>

            <span class="stat-title col-start-2 capitalize">
                {navbarStat.label}
            </span>
        </li>
    {/each}
</ul>
