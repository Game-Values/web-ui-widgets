<script lang="ts">
import type { IUser } from "$schema/api"
import type { IContextUser } from "$types"

import { SessionUserOnly } from "~/entities/session"
import { UserAchievements, UserBalance, UserDecencyStats, UserOrdersStats } from "~/entities/user"

import { useContext } from "$model"
import { Toggle } from "$ui/data"

interface $$Props {
    user: IUser
}

let user: IUser

let { context } = useContext<IContextUser>({ user })

export {
    user,
}
</script>

<div class="card card-secondary card-bordered card-normal">
    <div class="card-body gap-y-5">
        <h3 class="card-title">
            Statistics
        </h3>

        <SessionUserOnly user={$context.user}>
            <UserBalance />

            <Toggle
                checked
                inputClass="toggle-success"
            >
                <span class="text-secondary">
                    Show the amount of my transactions to other users
                </span>
            </Toggle>
        </SessionUserOnly>

        <UserDecencyStats />

        <UserOrdersStats />

        <UserAchievements />
    </div>
</div>
