<script lang="ts">
interface $$Props {
    mail?: string
}

interface $$Slots {
    default: NonNullable<unknown>
}

export let mail: string = "hello@game-values.com"
</script>

<a
    class="link link-primary link-hover"
    href="mailto:{mail}"
>
    <slot>
        {mail}
    </slot>
</a>
