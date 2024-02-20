<script lang="ts">
import IconInformationCircle from "virtual:icons/heroicons/information-circle"

interface $$Props {
    class?: string
    message?: string
}

interface $$Slots {
    default: NonNullable<unknown>
    icon: NonNullable<unknown>
}

let className: string = ""

let message: string = "No data"

export {
    className as class,
    message,
}
</script>

<div
    class="alert text-secondary {className}"
    role="alert"
>
    <slot name="icon">
        <IconInformationCircle />
    </slot>

    <p>
        <slot>
            {message}
        </slot>
    </p>
</div>
