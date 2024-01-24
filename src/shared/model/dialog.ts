import type { Dialog } from "$lib"
import type { TCallableLazy } from "$types"
import type { ComponentProps, SvelteComponent } from "svelte"
import type { Writable } from "svelte/store"

import { get, writable } from "svelte/store"

import { asyncModule } from "$lib"
import { Dialog as DialogWrapper } from "$ui"

type IDialog = {
    dialog: SvelteComponent,
    wrapper: SvelteComponent,
}

interface SvelteComponentConstructor {
    new (componentConfig: {
        props?: ComponentProps<SvelteComponent>
        target: Element,
    }): SvelteComponent
}

let dialoguesComponents: Map<Dialog, SvelteComponentConstructor> = (
    new Map<Dialog, SvelteComponentConstructor>()
)

let dialogues: Map<Dialog, IDialog> = (
    new Map<Dialog, IDialog>()
)

async function resolveDialogComponent(dialog: Dialog): Promise<SvelteComponentConstructor> {
    if (!dialoguesComponents.get(dialog)) {
        let DialogComponent: SvelteComponentConstructor = (
            await asyncModule<SvelteComponentConstructor>(`~/widgets/dialog/ui/${dialog}.svelte`)
        )

        dialoguesComponents.set(dialog, DialogComponent)
    }

    return dialoguesComponents.get(dialog)!
}

export async function openDialog(
    dialog: Dialog,
    props: ComponentProps<SvelteComponent> = {},
): Promise<void> {
    let DialogComponent: SvelteComponentConstructor = await resolveDialogComponent(dialog)

    let dialogWrapper: SvelteComponent = new DialogWrapper({
        props: {
            open: true,
        },
        target: document.body,
    })

    let dialogComponent: SvelteComponent = new DialogComponent({
        props,
        target: document.body.lastElementChild!,
    })

    dialogues.set(dialog, {
        dialog: dialogWrapper,
        wrapper: dialogComponent,
    })

    console.log(dialogues.get(dialog))
}

export function closeDialog(dialog: Dialog): void {
    dialogues.get(dialog)?.dialog.$destroy()
    dialogues.get(dialog)?.wrapper.$destroy()
    dialogues.delete(dialog)
}
