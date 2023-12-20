<script lang="ts" setup>
import type { ChatEvent } from "~/dto"
import type { Nullable, Undefinable } from "~/types"
import type { NativeScrollExposed } from "vexip-ui"
import type { Ref } from "vue"

import { DEBOUNCE_TIMEOUT } from "~/consts"

let { storeClient } = useClients()
let { chatController } = useControllers()

let { chatRoomEvents, chatRooms } = storeToRefs(storeClient.chatStore)

let refNativeScroll: Ref<Nullable<NativeScrollExposed>> = ref(null)
let chatEvents = computed((): ChatEvent[] => (
    getRef(chatRoomEvents).getRoomEvents(getRef(chatRooms, "mainRoom").id)
))

let sendRoomMessage = useDebounce(async (message: string): Promise<void> => {
    await chatController.sendRoomMessage(getRef(chatRooms, "mainRoom").id, message)
}, DEBOUNCE_TIMEOUT)

let updateRoom = useDebounce(async (): Promise<void> => {
    await getRef(refNativeScroll as Ref<NativeScrollExposed>, "refresh")()

    let lastScrollItem: Undefinable<Nullable<Element>> = (
        getRef(refNativeScroll as Ref<NativeScrollExposed>, "content")?.lastElementChild
    )

    if (lastScrollItem)
        await getRef(refNativeScroll as Ref<NativeScrollExposed>, "scrollToElement")(lastScrollItem)
}, DEBOUNCE_TIMEOUT)

let { stop } = useMutationObserver(refNativeScroll, updateRoom, {
    childList: true,
    subtree: true,
})

onMounted((): Undefinable<Promise<void>> => updateRoom())
onUnmounted((): void => stop())
</script>

<template>
<lazy-client-only>
    <v-collapse v-if="chatRooms.mainRoom">
        <v-collapse-panel
            :title="chatRooms.mainRoom.name"
            expanded
        >
            <v-space
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
                        v-for="chatEvent in chatEvents"
                        :key="chatEvent.event.event_id"
                        class="p-5 virtual-list__item"
                        tag="li"
                        vertical
                    >
                        <v-space justify="space-between">
                            <v-title :level="6">
                                <v-space align="center">
                                    <user-chat-avatar />

                                    <v-text>
                                        {{ chatEvent.sender.displayName }}
                                    </v-text>
                                </v-space>
                            </v-title>

                            <v-time-ago
                                :datetime="chatEvent.event.origin_server_ts"
                                class="text-sm text-white-6"
                            />
                        </v-space>

                        <v-text>
                            {{ chatEvent.event.content.body }}
                        </v-text>
                    </v-space>
                </v-native-scroll>

                <chat-send-message @message="sendRoomMessage($event)" />
            </v-space>
        </v-collapse-panel>
    </v-collapse>
</lazy-client-only>
</template>

<style lang="sass" scoped>
.vxp-collapse-vars
    --vxp-collapse-content-v-padding: theme("spacing.3")
    --vxp-collapse-content-h-padding: theme("spacing.5")
    --vxp-collapse-header-bg-color: theme("colors.primary")
    --vxp-collapse-arrow-color: theme("colors.white")
    --vxp-collapse-arrow-color-hover: theme("colors.white")
    --vxp-collapse-header-color-hover: theme("colors.white")

:deep(.vxp-collapse__body)
    @apply mt-5

:deep(.vxp-collapse__content)
    @apply rounded-8
    @apply bg-black-06
    @apply backdrop-blur
</style>
