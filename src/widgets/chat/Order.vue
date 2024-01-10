<script lang="ts" setup>
import type { ChatEvent } from "~/dto"
import type { NativeScrollExposed } from "vexip-ui"
import type { Ref } from "vue"

import { DEBOUNCE_TIMEOUT, DEFAULT_TIMEOUT } from "~/consts"

let { chatClient, cookieClient, storeClient } = useClients()
let { chatController, orderController } = useControllers()

let { chatRoomEvents } = storeToRefs(storeClient.chatStore)
let { order } = storeToRefs(storeClient.orderStore)

let roomId: Ref<string> = ref("")
let refNativeScroll: NativeScrollExposed

let chatEvents = computed((): ChatEvent[] => (
    getRef(chatRoomEvents).getRoomEvents(getRef(roomId))
))

let sendRoomMessage = useDebounce(async (message: string): Promise<void> => {
    await chatController.sendRoomMessage(getRef(roomId), message)
}, DEBOUNCE_TIMEOUT)

onMounted((): Promise<void> => (
    useNextTick((): void => {
        if (refNativeScroll?.content)
            useMutationObserver(refNativeScroll.content, (): Promise<void> => (
                useNextTick(async (): Promise<void> => {
                    await promiseTimeout(DEFAULT_TIMEOUT)
                    await refNativeScroll.refresh()

                    if (refNativeScroll.content instanceof HTMLUListElement)
                        await refNativeScroll.scrollTo(0, refNativeScroll.content.scrollHeight, 0)
                })
            ), { childList: true, subtree: true })
    })
))

onMounted(async (): Promise<void> => {
    await nextTick()
    await orderController.createChatRoom()

    let res: { room_id: string } = (
        await chatClient.getRoomIdForAlias(`#${getRef(order, "id")}:${useRuntimeConfig().public.matrixChatName}`)
    )

    setRef(roomId, res.room_id)
})
</script>

<template>
<lazy-client-only>
    <v-space
        class="px-6 bg-black-06 backdrop-blur rounded-8"
        size="large"
        vertical
    >
        <v-native-scroll
            class="w-full"
            height="600"
            ref="refNativeScroll"
            scroll-tag="ul"
            use-y-bar
        >
            <v-space
                tag="li"
                vertical
            >
                <v-space
                    v-for="chatEvent in chatEvents"
                    :key="chatEvent.getId()"
                    class="p-5 virtual-list__item"
                    tag="li"
                    vertical
                >
                    <v-space
                        justify="space-between"
                        size="large"
                    >
                        <v-title :level="6">
                            <v-space align="center">
                                <user-chat-avatar />

                                <v-text>
                                    {{ chatEvent.username }}
                                </v-text>
                            </v-space>
                        </v-title>

                        <v-time-ago
                            :datetime="chatEvent.getDate()"
                            class="text-sm text-white-6"
                        />
                    </v-space>

                    <v-text disabled>
                        {{ chatEvent.content }}
                    </v-text>
                </v-space>
            </v-space>
        </v-native-scroll>

        <chat-send-message
            v-if="isAuthenticated() && cookieClient.chatToken"
            @message="sendRoomMessage($event)"
        />
    </v-space>
</lazy-client-only>
</template>
