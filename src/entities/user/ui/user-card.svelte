<script lang="ts">
import type { IUser } from "$schema/api"

import { useRoute } from "$model"
import { Avatar, EnhancedImage } from "$ui/data"

import IconArrowFatUp from "virtual:icons/common/arrow-fat-up"

interface $$Props {
    user: IUser
}

let { route: settingsRoute } = useRoute("/settings")

export let user: IUser
</script>

<div class="card card-secondary card-bordered">
    <div
        style:--padding-card="1.25rem"
        class="card-body gap-x-8 flex-row"
    >
        <Avatar
            class="
                w-36
                ring-4 ring-accent ring-inset
                text-4xl
                shadow-[0_0.1875rem_1.75rem_0_rgba(61,152,255,0.40)]
            "
            username={user.full_name}
        />

        <div class="max-w-[28rem] gap-y-2 flex flex-col">
            <h2 class="gap-x-4 flex items-center capitalize">
                {user.full_name}

                <EnhancedImage
                    --height="1.125rem"
                    --width="1.5rem"
                    alt="flag-ru"
                    size="xs"
                    src="images/flag/ru.png"
                />

                <span
                    class="
                        gap-x-0.5
                        inline-flex items-center
                        text-base text-accent
                    "
                >
                    Level

                    <i class="icon">
                        <IconArrowFatUp />
                    </i>

                    1
                </span>
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
