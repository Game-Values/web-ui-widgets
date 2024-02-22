<script lang="ts">
import { useEventDispatcher } from "$model"

interface $$Props {
    class?: string
    contentClass?: string
    opened?: boolean
    title?: string
    titleClass?: string
}

interface $$Events {
    toggle: CustomEvent<boolean>
}

let className: string = ""

let contentClass: string = ""

let opened: boolean = false

let title: string = ""

let titleClass: string = ""

let { dispatchEvent: dispatchToggleEvent } = useEventDispatcher<boolean>("toggle")

export {
    className as class,
    contentClass,
    opened,
    title,
    titleClass,
}
</script>

<div class="collapse collapse-arrow {className}">
    <input
        type="checkbox"
        bind:checked={opened}
        on:change={e => dispatchToggleEvent(e.currentTarget.checked)}
    />

    <h2 class="collapse-title {titleClass}">
        <slot name="title">
            {title}
        </slot>
    </h2>

    <div class="collapse-content {contentClass}">
        <slot />
    </div>
</div>
