<script lang="ts">
import { useSession } from "$model"
import { Avatar } from "$ui/data"

let { logout, user } = useSession()
</script>

<details class="dropdown dropdown-end">
    <summary class="btn btn-link">
        <Avatar
            class="w-10 ring ring-accent"
            username={$user.full_name}
        />
    </summary>

    <ul class="dropdown-content menu w-60">
        <li class="text-error">
            <button on:click={logout}>
                Log Out
            </button>
        </li>
    </ul>
</details>
