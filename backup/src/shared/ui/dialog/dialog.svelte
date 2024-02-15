<script lang="ts">
import type { DialogName } from "$lib"

import Dialog, { Actions, Content, Header, Title } from "@smui/dialog"
import IconButton from "@smui/icon-button"

import IconXMark from "virtual:icons/heroicons/x-mark"

import { useDialog } from "$model"

let { closeDialog, isDialogOpen } = useDialog()

let className: string = ""

let name: DialogName

let title: string = ""

let width: string = "auto"

export {
    className as class,
    name,
    title,
    width,
}
</script>

<Dialog
    open={$isDialogOpen(name)}
    surface$class={className}
    surface$style="width: {width};"
    on:SMUIDialog:closed={closeDialog}
>
    <Header>
        <Title class="text-center text-level-3 font-bold">
            <slot name="title">
                {title}
            </slot>
        </Title>

        <IconButton
            class="absolute top-2 right-2"
            action="close"
            tabindex={-1}
        >
            <IconXMark />
        </IconButton>
    </Header>

    <Content>
        <slot name="content" />
    </Content>

    <Actions>
        <slot name="actions" />
    </Actions>
</Dialog>
