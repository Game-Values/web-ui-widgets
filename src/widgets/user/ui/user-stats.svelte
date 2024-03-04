<script lang="ts">
import { UserAchievements, UserBalance, UserDecencyStats, UserOrdersStats } from "~/entities/user"

import { Toggle } from "$ui/data"
</script>

<div class="card card-secondary card-bordered card-normal">
    <div class="card-body gap-y-5">
        <h3 class="card-title">
            Statistics
        </h3>

        <UserBalance />

        <Toggle
            checked
            inputClass="toggle-success"
        >
            <span class="text-secondary">
                Show the amount of my transactions to other users
            </span>
        </Toggle>

        <UserDecencyStats />

        <UserOrdersStats />

        <UserAchievements />
    </div>
</div>
