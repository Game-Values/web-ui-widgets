<script lang="ts" setup>
import { UnwrapRef } from "vue"

interface FaqForm {
    email: string
    question: string
}

let faqForm: UnwrapRef<FaqForm> = reactive({
    email: "",
    question: "",
})
</script>

<template>
<v-space vertical>
    <v-title :level="2">
        No answer to your question?
    </v-title>

    <v-text>
        Write your inquiry, and we will review it.
    </v-text>

    <v-form :model="faqForm">
        <v-form-item prop="email">
            <v-input placeholder="Email" />
        </v-form-item>

        <v-form-item prop="question">
            <v-textarea
                :rows="6"
                placeholder="Describe your question"
            />
        </v-form-item>

        <v-form-item action>
            <v-form-submit block>
                Send
            </v-form-submit>
        </v-form-item>
    </v-form>
</v-space>
</template>
