<script lang="ts">
import type { IBodyLoginWithOauth2ApiV1LoginOauthPost, IToken } from "~/shared/model"

import Button from "@smui/button"
import { createEventDispatcher } from "svelte"

import { authByOauth2 } from "~/entities/auth"

let dispatch = createEventDispatcher<{
    auth: IToken
}>()

let data: IBodyLoginWithOauth2ApiV1LoginOauthPost

function handleAuth(): void {
    authByOauth2(data)
        .then((token: IToken) => dispatch("auth", token))
}

export {
    data,
}
</script>

<Button
    color="primary"
    type="submit"
    variant="unelevated"
    on:click={() => handleAuth()}
>
    Sign In
</Button>
