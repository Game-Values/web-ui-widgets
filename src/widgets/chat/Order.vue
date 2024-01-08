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
    chat

    <pre>
        {{ chatSyncState }}
    </pre>
</lazy-client-only>
</template>
