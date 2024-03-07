<script lang="ts">
import type { IBodyCreateUserProfileApiV1UsersPost, IUser } from "~/shared/lib"

import Button from "@smui/button"
import { createEventDispatcher } from "svelte"

import { authSignup } from "~/entities/auth"

let dispatch = createEventDispatcher<{
    signup: IUser
}>()

let className: string = ""

let data: IBodyCreateUserProfileApiV1UsersPost

function handleSignup(): void {
    authSignup(data)
        .then((user: IUser) => dispatch("signup", user))
}

export {
    className as class,
    data,
}
</script>

<Button
    class={className}
    color="primary"
    type="submit"
    variant="unelevated"
    on:click={() => handleSignup()}
>
    Registration
</Button>
