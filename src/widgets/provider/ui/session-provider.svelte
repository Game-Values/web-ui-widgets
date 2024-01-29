<script lang="ts">
import type { ISession } from "$model/session"
import type { ICallable } from "$types"

import { useSession } from "$model/session"
import { LazyPromise } from "$ui/effect"

let session: ISession

let promise = new Promise((resolve: ICallable): void => {
    useSession().update(session)
    resolve()
})

export {
    session,
}
</script>

<LazyPromise promise={promise}>
    <svelte:fragment slot="resolve">
        <slot />
    </svelte:fragment>
</LazyPromise>
