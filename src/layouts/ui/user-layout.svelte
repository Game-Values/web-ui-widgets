<script lang="ts">
import type { IUser } from "$schema/api"

import { UserCard } from "~/entities/user"
import { HelpQuestions } from "~/widgets/help"
import { UserStats } from "~/widgets/user"

import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    user: IUser
}

interface $$Slots {
    default: NonNullable<unknown>
}

export let user: IUser
</script>

<Grid>
    <GridCol
        class="gap-y-6 flex-col"
        span={9}
    >
        <UserCard {user} />

        <slot />
    </GridCol>

    <GridCol span={3}>
        <UserStats />
    </GridCol>
</Grid>

<Grid>
    <GridCol>
        <HelpQuestions />
    </GridCol>
</Grid>
