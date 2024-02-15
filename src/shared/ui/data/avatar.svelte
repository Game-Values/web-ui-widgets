<script lang="ts">
interface $$Props {
    class?: string
    online?: boolean
    src?: string
    username?: string | undefined
}

let className: string = ""

let online: boolean = false

let src: string = ""

let username: string | undefined = undefined

$: placeholder = (
    src
        ? ""
        : (username || "")
)

export {
    className as class,
    online,
    src,
    username,
}
</script>

{#if src || username}
    <div
        class="avatar"
        class:online={online}
        class:placeholder={placeholder}
    >
        <div
            class="rounded-full {className}"
            class:bg-secondary={placeholder}
        >
            {#if src}
                <img
                    alt={username || "avatar"}
                    {src}
                />
            {:else}
                <span class="text-secondary uppercase">
                    {placeholder.slice(0, 2)}
                </span>
            {/if}
        </div>
    </div>
{/if}
