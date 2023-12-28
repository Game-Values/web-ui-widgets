<script lang="ts" setup>
import type { ChatEvent } from "~/dto"
import type { NativeScrollExposed } from "vexip-ui"

import { DEBOUNCE_TIMEOUT, DEFAULT_TIMEOUT } from "~/consts"

let { cookieClient, storeClient } = useClients()
let { chatController } = useControllers()
let { loginModal, registrationModal } = useModals()

let { chatRoomEvents, chatRooms } = storeToRefs(storeClient.chatStore)

let refNativeScroll: NativeScrollExposed

let chatEvents = computed((): ChatEvent[] => (
    getRef(chatRoomEvents).getRoomEvents(getRef(chatRooms, "mainRoom").id)
))

let sendRoomMessage = useDebounce(async (message: string): Promise<void> => {
    await chatController.sendRoomMessage(getRef(chatRooms, "mainRoom").id, message)
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
                        :key="chatEvent.getId()"
                        class="p-5 virtual-list__item"
                        tag="li"
                        vertical
                    >
                        <v-space
                            size="large"
                            justify="space-between"
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

                        <v-text>
                            {{ chatEvent.content }}
                        </v-text>
                    </v-space>
                </v-native-scroll>

                <chat-send-message
                    v-if="isAuthenticated() && cookieClient.chatToken"
                    @message="sendRoomMessage($event)"
                />

                <v-space
                    v-else
                    class="
                        p-3
                        rounded-5
                        bg-secondary
                    "
                    align="center"
                    justify="center"
                >
                    <v-button
                        type="primary"
                        text
                        @click="loginModal.show()"
                    >
                        Log in
                    </v-button>

                    <v-text>
                        or
                    </v-text>

                    <v-button
                        type="primary"
                        text
                        @click="registrationModal.show()"
                    >
                        Sign up
                    </v-button>
                </v-space>
            </v-space>
        </v-collapse-panel>
    </v-collapse>

    <template #fallback>
        <v-skeleton-group
            activated
        >
            <v-space vertical>
                <v-skeleton height="75" />

                <v-skeleton
                    v-for="i in 5"
                    :key="i"
                    height="50"
                />
            </v-space>
        </v-skeleton-group>
    </template>
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
