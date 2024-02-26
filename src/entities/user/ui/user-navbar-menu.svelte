<script lang="ts">
import { useRoute, useSession } from "$model"
import { Avatar } from "$ui/data"

interface $$Props {
    class?: string
}

let className: string = ""

let { route: settingsRoute } = useRoute("/settings")
let { logout, user } = useSession()

export {
    className as class,
}
</script>

<details class="dropdown dropdown-end {className}">
    <summary class="btn btn-link">
        <Avatar
            class="w-10 ring ring-accent"
            username={$user.full_name}
        />
    </summary>

    <menu class="dropdown-content menu w-60">
        <li>
            <a href={$settingsRoute}>
                Settings
            </a>
        </li>

        <li class="text-error">
            <button on:click={logout}>
                Log Out
            </button>
        </li>
    </menu>
</details>
