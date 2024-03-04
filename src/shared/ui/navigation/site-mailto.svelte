<script lang="ts">
interface $$Props {
    label?: string
}

interface $$Slots {
    default: NonNullable<unknown>
}

export let label: string = "support@game-values.com"
</script>

<a
    class="link link-primary link-hover"
    href="mailto:support@game-values.com"
>
    <slot>
        {label}
    </slot>
</a>
