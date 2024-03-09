<script lang="ts">
import type { IModal } from "$types"

import { useModal } from "$model"

import IconXMark from "virtual:icons/heroicons/x-mark"

interface $$Props {
    class?: string
    contentClass?: string
    name: IModal
    title?: string
}

interface $$Slots {
    default: NonNullable<unknown>
    title: NonNullable<unknown>
}

let className: string = ""

let contentClass: string = ""

let name: IModal

let title: string = ""

function dialog(node: HTMLDialogElement): void {
    let { closeModal } = useModal(name)

    node.addEventListener("close", closeModal)
    node.showModal()
}

export {
    className as class,
    contentClass,
    name,
    title,
}
</script>

<dialog
    id={name}
    class="modal"
    use:dialog
>
    <div class="modal-box glass glass-2xl {className}">
        <form method="dialog">
            <button
                class="
                    btn btn-sm btn-circle btn-ghost
                    absolute right-4 top-4
                "
            >
                <i class="icon">
                    <IconXMark />
                </i>
            </button>
        </form>

        <h3 class="font-bold text-2xl text-center">
            <slot name="title">
                {title}
            </slot>
        </h3>

        <div class={contentClass}>
            <slot />
        </div>
    </div>
</dialog>

<style>
.modal::backdrop {
    @apply bg-black/[0.40];
    @apply backdrop-blur-sm;
}

.modal-box {
    --rounded-box: theme("borderRadius.lg");

    @apply p-7 gap-y-5;
    @apply flex flex-col;
    @apply bg-white/[0.02];
    @apply shadow-[0_0.375rem_3.25rem_0_rgba(61,152,255,0.20)];
}
</style>
