<script lang="ts">
interface $$Props {
    class?: string
    contentClass?: string
    opened?: boolean
    title?: string
}

let className: string = ""

let contentClass: string = ""

let opened: boolean = false

let title: string = ""

export {
    className as class,
    contentClass,
    opened,
    title,
}
</script>

<div class="collapse collapse-arrow {className}">
    <input
        type="checkbox"
        bind:checked={opened}
    />

    <h2 class="collapse-title">
        <slot name="title">
            {title}
        </slot>
    </h2>

    <div class="collapse-content {contentClass}">
        <slot />
    </div>
</div>
