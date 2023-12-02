<script setup lang="ts">
import type { ComputedRef, UnwrapRef } from "vue"

import { Breakpoint } from "~~/common/enums"

interface FaqForm {
    email: string
}

let breakpoint = useBreakpoint()

let faqHeight: ComputedRef<number> = computed((): number => (
    useGet({
        [Breakpoint.LG]: 343,
        [Breakpoint.MD]: 290,
        [Breakpoint.SM]: 574,
        [Breakpoint.XS]: 614,
    }, getRef(breakpoint))
))

let faqForm: UnwrapRef<FaqForm> = reactive({
    email: "",
})
</script>

<template>
<ui-overlay
    :height="faqHeight"
    class="
        bg-[url(/images/faq.png)]
        bg-no-repeat
        bg-cover
        bg-right
        border-solid-secondary
        rounded-5
    "
>
    <template #overlay>
        <slot>
            <v-space
                class="
                    md:(fit p-15)
                    xs:(p-12)
                "
                justify="center"
                size="large"
                vertical
            >
                <v-title :level="1">
                    Have questions?
                </v-title>

                <v-text>
                    Leave your email, and we'll contact you
                </v-text>

                <v-form :model="faqForm">
                    <v-space>
                        <v-form-item props="email">
                            <v-input />
                        </v-form-item>

                        <v-form-item>
                            <v-form-submit>
                                Send
                            </v-form-submit>
                        </v-form-item>
                    </v-space>
                </v-form>
            </v-space>
        </slot>
    </template>
</ui-overlay>
</template>
