<Panel bind:open={isPanelOpen}>
    <Header>
        <h4>
            <slot name="title">
                {title}
            </slot>
        </h4>

        <IconButton
            class="w-8 h-8 text-1.25rem"
            pressed={isPanelOpen}
            slot="icon"
            toggle
        >
            <Icon on>
                <IconChevronDown />
            </Icon>

            <Icon>
                <IconChevronRight />
            </Icon>
        </IconButton>
    </Header>

    <Content class={content$class}>
        <slot />
    </Content>
</Panel>

<script lang="ts">
import { Panel, Header, Content } from "@smui-extra/accordion"
import IconButton, { Icon } from "@smui/icon-button"

import IconChevronDown from "~icons/heroicons/chevron-down"
import IconChevronRight from "~icons/heroicons/chevron-right"

let isPanelOpen: boolean = false

export let content$class: string = "" // todo

export let title: string = ""
</script>
