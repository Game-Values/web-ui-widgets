<script lang="ts" setup>
// let { chatClient, cookieClient } = useClients()

// todo: chat
// if (isClient()) {
// window.chatClient = chatClient
// chatClient.startClient()
// let user = await chatClient.register("user", "password")
// let guest = await chatClient.registerGuest()
// console.log(guest)

// await chatClient.login("m.login.token", {
//     refresh_token: cookieClient.refreshToken,
//     token: cookieClient.accessToken,
// })
// }
</script>

<template>
<slot />
</template>
