<script lang="ts" setup>
definePageMeta({
    seo: {
        title: "Account and Settings",
    },
})
</script>

<template>
<v-collapse>
    <v-collapse-panel title="How do I change personal information in my profile?">
        <v-text disabled>
            Go to the "My Profile" section and select "Edit Profile." Make the necessary changes and
            save them.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="Can I delete my account?">
        <v-text disabled>
            To delete your account, contact support or follow the instructions in the "Settings" section of
            your profile.
        </v-text>
    </v-collapse-panel>
</v-collapse>
</template>
