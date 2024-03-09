<script lang="ts" setup>
import type { IRoomEvent } from "matrix-js-sdk"

import { EventType, MatrixEvent } from "matrix-js-sdk"

import { DEBOUNCE_TIMEOUT } from "~/consts"
import { ChatEvents } from "~/dto"
import { createCollection } from "~/factories"

let { chatClient, routerClient, storeClient } = useClients()
let { chatController } = useControllers()

let { chatJoinedRooms } = storeToRefs(storeClient.chatStore)

let chatEvents = computed((): ChatEvents => {
    let events: MatrixEvent[] = Object.entries(getRef(chatJoinedRooms))
        .flatMap(([, room]): MatrixEvent[] => (
            room.timeline.events.map((event: IRoomEvent): MatrixEvent => new MatrixEvent(event))
        ))
        .filter((event: MatrixEvent): boolean => event.getType() === EventType.RoomMessage)

    return createCollection(ChatEvents, events)
})

let chatRoomId = computed((): string => routerClient.getRouteParam("roomId"))

let sendRoomMessage = useDebounce(async (message: string): Promise<void> => {
    let { room_id: roomId } = (
        await chatClient.getRoomIdForAlias(`#${getRef(chatRoomId)}:${useRuntimeConfig().public.matrixChatName}`)
    )

    await chatController.sendRoomMessage(roomId, message)
    await chatController.startChat() // todo: <=
}, DEBOUNCE_TIMEOUT)
</script>

<template>
<v-card>
    <lazy-client-only v-if="chatRoomId">
        <v-space
            class="px-6 h-full [&>*:first-child]:(flex-1)"
            size="large"
            vertical
        >
            <v-native-scroll
                class="w-full"
                height="800"
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

            <chat-send-message @message="sendRoomMessage($event)" />
        </v-space>
    </lazy-client-only>

    <v-space
        v-else
        align="center"
        class="h-full text-white/60"
        justify="center"
        size="large"
        vertical
    >
        <ui-icon
            custom="bot"
            size="150"
        />

        <v-text class="text-center">
            Select who you would like to message
        </v-text>
    </v-space>
</v-card>
</template>
