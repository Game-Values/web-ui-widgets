<script lang="ts">
import { settingsLinks, SettingsTab } from "~/entities/settings"

interface $$Props {
    class?: string
    tabClass?: string
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: string = ""

let tabClass: string = ""

export {
    className as class,
    tabClass,
}
</script>

<nav class="join {className}">
    {#each settingsLinks as settingsLink (settingsLink.label)}
        <SettingsTab
            class="join-item {tabClass}"
            link={settingsLink}
        />
    {/each}
</nav>
