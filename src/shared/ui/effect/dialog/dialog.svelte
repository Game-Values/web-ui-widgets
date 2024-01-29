<script lang="ts">
import type { IUseDialog } from "$model/dialog"

import Dialog, { Actions, Content, Header, Title } from "@smui/dialog"

import IconXMark from "virtual:icons/heroicons/x-mark"

import { forwardEvent } from "$lib/helpers"
import { IconButton } from "$ui/common"

let className: string = ""

let dialog: IUseDialog

let { close, context, opened } = dialog

export {
    className as class,
    dialog,
}
</script>

<Dialog
    open={$opened}
    surface$class={className}
    surface$style="width:{$context.width};"
    on:SMUIDialog:closed={forwardEvent(close, "close")}
>
    <Header>
        <Title class="text-center text-level-3 font-bold">
            <slot name="title">
                {$context.title}
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
