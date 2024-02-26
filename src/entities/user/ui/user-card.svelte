<script lang="ts">
import type { IUser } from "$schema/api"

import { useRoute } from "$model"
import { Avatar } from "$ui/data"

interface $$Props {
    user: IUser
}

let { route: settingsRoute } = useRoute("/settings")

export let user: IUser
</script>

<div class="card card-bordered card-normal">
    <div class="card-body gap-x-8 flex-row">
        <Avatar
            class="w-32 ring ring-accent text-4xl"
            username={user.full_name}
        />

        <div class="max-w-[28rem] gap-y-2 flex flex-col">
            <h2 class="capitalize">
                {user.full_name}
            </h2>

            <p class="text-secondary">
                Create a description for your profile or shop. Description must be no longer than 180 characters
            </p>
        </div>

        <a
            class="link link-primary link-hover ml-auto"
            href={$settingsRoute}
        >
            Settings
        </a>
    </div>
</div>
