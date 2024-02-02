<script lang="ts" setup>
import type { User } from "~/dto"
import type { IJoinedRoom, IRoomEvent } from "matrix-js-sdk"
import type { Ref } from "vue"

let { storeClient } = useClients()
let { userController } = useControllers()

let { chatJoinedRooms, chatRooms } = storeToRefs(storeClient.chatStore)

let directRooms = computed((): (IJoinedRoom & { id: string })[] => {
    let mainRoomId: string = getRef(chatRooms, "mainRoom")
        .id
        .replace(`:${useRuntimeConfig().public.matrixChatName}`, "")

    return useMap(useOmit(getRef(chatJoinedRooms), mainRoomId), (
        (room: IJoinedRoom, roomId: string) => (
            useAssign(room, { id: roomId })
        )
    ))
})

let users: Ref<User[]> = ref([])

onMounted(async (): Promise<void> => (
    setRef(users, (
        await Promise.all(
            useMap(getRef(directRooms), (room: IJoinedRoom): Promise<User> => {
                let roomEvent: IRoomEvent = useFind(room.timeline.events, (
                    (event: IRoomEvent): boolean => (
                        event.type === "m.room.name"
                    )
                ))!

                let userId: string = useLast(roomEvent.content.name.split("_"))!

                return userController.fetchUser(userId)
            })
        )
    ))
))
</script>

<template>
<v-card>
    <template #title>
        <v-title :level="3">
            Messages
        </v-title>
    </template>

    <template #extra>
        <v-button text>
            <ui-icon
                heroicons="magnifying-glass"
                size="18"
            />
        </v-button>
    </template>

    <v-menu class="h-full">
        <v-menu-item
            v-for="user in users"
            :key="user.id"
            :label="user.id"
        >
            <template #icon>
                <user-message-avatar online />
            </template>

            <v-space
                size="small"
                vertical
            >
                <v-space>
                    <v-title :level="6">
                        {{ user.full_name }}
                    </v-title>

                    <v-space
                        align="center"
                        size="small"
                    >
                        <ui-icon
                            color="success"
                            heroicons="hand-thumb-up"
                        />

                        <v-text type="success">
                            0%
                        </v-text>
                    </v-space>

                    <v-space
                        align="center"
                        size="small"
                    >
                        <ui-icon
                            color="primary"
                            heroicons="arrow-small-up"
                        />

                        <v-text type="primary">
                            1
                        </v-text>
                    </v-space>
                </v-space>

                <v-text
                    :style="{
                        fontSize: useFirst(useTheme('fontSize.sm')),
                    }"
                    disabled
                >
                    Last Message Text
                </v-text>
            </v-space>
        </v-menu-item>
    </v-menu>
</v-card>
</template>

<style lang="sass" scoped>
.vxp-card
    :deep(.vxp-card__header)
        @apply bg-[#1E1E1F]
</style>
