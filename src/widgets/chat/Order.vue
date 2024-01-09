<script lang="ts" setup>
import type { ChatEvent } from "~/dto"
import type { NativeScrollExposed } from "vexip-ui"

import { DEBOUNCE_TIMEOUT, DEFAULT_TIMEOUT } from "~/consts"

let { chatClient, cookieClient, storeClient } = useClients()
let { chatController, orderController, userController } = useControllers()
let { loginModal, registrationModal } = useModals()

let { chatJoinedRooms, chatSyncState } = storeToRefs(storeClient.chatStore)
let { order } = storeToRefs(storeClient.orderStore)
let { user } = storeToRefs(storeClient.userStore)

let refNativeScroll: NativeScrollExposed

onMounted(async (): Promise<void> => {
    await orderController.createChatRoom()

    console.log(getRef(chatSyncState), getRef(chatJoinedRooms))
})
</script>

<template>
<lazy-client-only>
    <v-space
        size="large"
        vertical
    >
        <pre>
            {{ chatSyncState }}
        </pre>

        <v-native-scroll
            class="w-full"
            height="600"
            ref="refNativeScroll"
            scroll-tag="ul"
            use-y-bar
        >
            <v-space
                class="p-5 virtual-list__item"
                tag="li"
                vertical
            >
                <v-space
                    justify="space-between"
                    size="large"
                >

                </v-space>
            </v-space>
        </v-native-scroll>
    </v-space>
</lazy-client-only>
</template>
