<template>
<v-form class="max-w-40rem">
    <v-form-item>
        <user-profile-avatar premium />
    </v-form-item>

    <v-form-item label="Nickname">
        <v-input />
    </v-form-item>

    <v-form-item label="Email">
        <v-space
            vertical
        >
            <v-input />

            <ui-link type="primary">
                Change e-mail
            </ui-link>
        </v-space>
    </v-form-item>

    <v-form-item label="Country">
        <v-input />
    </v-form-item>

    <v-form-item label="Currency">
        <v-input />
    </v-form-item>

    <v-form-item>
        <v-space
            align="center"
            size="large"
        >
            <v-switch />

            <v-text disabled>
                Show the amount of my transactions to other users
            </v-text>
        </v-space>
    </v-form-item>

    <v-form-item>
        <v-form-submit block>
            Save
        </v-form-submit>
    </v-form-item>
</v-form>
</template>
<script setup lang="ts">
</script>
