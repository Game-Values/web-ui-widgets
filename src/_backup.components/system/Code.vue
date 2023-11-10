<template>
<div class="relative code-container sm:flex sm:items-center w-full">
    <pre class="code-block bg-gray-500 p-4 rounded w-full text-black text-lg font-medium leading-none">
        <slot />
    </pre>
    <div class="absolute top-2 right-2 sm:top-1 sm:right-1 ">
        <ui-button-secondary @click="copyCode">
            <ui-icon-clipboard size="24" />
        </ui-button-secondary>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        copyCode() {
            // Create a textarea and set its value to the trimmed slot content
            let textArea = document.createElement("textarea")
            textArea.value = this.$el.querySelector(".code-block").textContent.trim()
            document.body.appendChild(textArea)

            // Select the textarea and execute the copy command
            textArea.select()
            document.execCommand("copy")

            // Clean up by removing the textarea from the DOM
            document.body.removeChild(textArea)
        },
    },
}
</script>
