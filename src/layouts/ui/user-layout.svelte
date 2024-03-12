<script lang="ts">
import type { IUser } from "$schema/api"

import { SessionUserOnly } from "~/entities/session"
import { UserCard, userLinks } from "~/entities/user"
import { ChatSendUserMessageButton } from "~/features/chat"
import { HelpQuestions } from "~/widgets/help"
import { UserStats } from "~/widgets/user"

import { Grid, GridCol } from "$ui/layout"
import { NavTabs } from "$ui/navigation"

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
        <UserCard {user}>
            <svelte:fragment slot="chatSendUserMessageButton">
                <ChatSendUserMessageButton
                    class="mt-auto"
                    {user}
                />
            </svelte:fragment>
        </UserCard>

        <SessionUserOnly {user}>
            <svelte:fragment slot="fallback">
                <NavTabs links={userLinks} />
            </svelte:fragment>
        </SessionUserOnly>

        <slot />
    </GridCol>

    <GridCol span={3}>
        <UserStats {user} />
    </GridCol>
</Grid>

<Grid>
    <GridCol>
        <HelpQuestions />
    </GridCol>
</Grid>
