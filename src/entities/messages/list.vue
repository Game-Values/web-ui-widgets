<script lang="ts" setup>
import type { User } from "~/dto"
import type { IJoinedRoom, IRoomEvent } from "matrix-js-sdk"
import type { Ref } from "vue"

let { routerClient, storeClient } = useClients()
let { userController } = useControllers()

let { chatJoinedRooms } = storeToRefs(storeClient.chatStore)
let { user: me } = storeToRefs(storeClient.userMeStore)

let roomsIds: Ref<string[]> = ref([])
let usersList: Ref<User[]> = ref([])

watch((): Record<string, IJoinedRoom> => getRef(chatJoinedRooms), (val: Record<string, IJoinedRoom>): void => {
    let directRoomsEvents: IRoomEvent[] = Object.entries(val)
        .map(([, room]: [string, room: IJoinedRoom]): IRoomEvent => {
            let stateEvent: IRoomEvent = room.state.events.find((event: IRoomEvent): boolean => (
                event.type === "m.room.create"
            ))!

            let timelineEvent: IRoomEvent = room.timeline.events.find((event: IRoomEvent): boolean => (
                event.type === "m.room.create"
            ))!

            return stateEvent || timelineEvent
        })

    let directRoomsIds: IRoomEvent[] = Object.entries(val)
        .map(([, room]: [string, room: IJoinedRoom]): IRoomEvent => {
            let stateEvent: IRoomEvent = room.state.events.find((event: IRoomEvent): boolean => (
                event.type === "m.room.name"
            ))!

            let timelineEvent: IRoomEvent = room.timeline.events.find((event: IRoomEvent): boolean => (
                event.type === "m.room.name"
            ))!

            return stateEvent || timelineEvent
        })

    let usersPromises: Promise<User>[] = useMap<any, Promise<User>>(directRoomsEvents, (roomEvent: IRoomEvent): Promise<User> => {
        let userId = (
            roomEvent.content.from === getRef(me, "id")
                ? roomEvent.content.to
                : roomEvent.content.from
        )

        return userController.fetchUser(userId)
    })

    Promise
        .all(usersPromises)
        .then((users: User[]): void => setRef(usersList, users))
        .then((): void => setRef(roomsIds, useMap(directRoomsIds, "content.name")))
}, { immediate: true })
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

    <v-menu
        :active="routerClient.getRouteParam('roomId')"
        class="h-full"
    >
        <v-menu-item
            v-for="(user, i) in usersList"
            :key="user.id"
            :label="roomsIds[i]"
            @select="
                navigateTo(
                    routerClient.getRoute(routerClient.routeNames.USER_MESSAGES, {
                        params: {
                            roomId: roomsIds[i],
                            userId: me.id,
                        },
                    }),
                )
            "
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
