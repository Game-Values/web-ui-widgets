<script lang="ts">
import type { IUser } from "$schema/api"

import { isSessionUser } from "$lib/helpers"

interface $$Props {
    user?: IUser
    userId?: string
}

interface $$Slots {
    default: NonNullable<unknown>
    fallback: NonNullable<unknown>
}

let user: IUser | undefined = undefined

let userId: string | undefined = undefined

$: sessionUserId = user?.id || userId

export {
    user,
    userId,
}
</script>

{#if sessionUserId && isSessionUser(sessionUserId)}
    <slot />
{:else}
    <slot name="fallback" />
{/if}
