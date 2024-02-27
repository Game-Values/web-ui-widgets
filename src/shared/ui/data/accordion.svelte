<script lang="ts">
interface $$Props {
    class?: string
    collapseClass?: string
    contentClass?: string
    titleClass?: string
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: string = ""

let collapseClass: string = ""

let contentClass: string = ""

let titleClass: string = ""

function accordion(node: HTMLDivElement): void {
    Array
        .from(node.children)
        .filter((childNode: Element): boolean => childNode.matches(".collapse"))
        .forEach((childNode: Element): void => {
            childNode.classList.add("join-item")

            if (collapseClass)
                childNode.classList.add(collapseClass)

            if (contentClass)
                childNode.querySelector(".collapse-content")
                    ?.classList.add(...contentClass.split(" "))

            if (titleClass)
                childNode.querySelector(".collapse-title")
                    ?.classList.add(...titleClass.split(" "))
        })
}

export {
    className as class,
    collapseClass,
    contentClass,
    titleClass,
}
</script>

<div
    class="join join-vertical w-full {className}"
    use:accordion
>
    <slot />
</div>
