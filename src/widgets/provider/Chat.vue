<script lang="ts" setup>
let { chatClient } = useClients()
let { chatController } = useControllers()

onMounted(async (): Promise<void> => {
    await chatClient.startClient()

    await chatController.fetchChatRooms()
    await chatController.subscribeChat()
})
</script>

<template>
<slot />
</template>
