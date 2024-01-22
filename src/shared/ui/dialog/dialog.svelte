<script lang="ts">
import Dialog, { Actions, Content, Header, Title } from "@smui/dialog"
import IconButton from "@smui/icon-button"

import IconXMark from "virtual:icons/heroicons/x-mark"

export let open: boolean = false

export let title: string = ""

export let width: string = "auto"
</script>

<Dialog
    surface$style="width: {width};"
    bind:open={open}
    on:SMUIDialog:closed={() => open = false}
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
