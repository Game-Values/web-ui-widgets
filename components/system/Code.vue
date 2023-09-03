<template>
  <div class="relative code-container sm:flex sm:items-center w-full">
    <pre class="code-block bg-gray-500 p-4 rounded w-full"><slot></slot></pre>
    <button @click="copyCode"
            class="copy-button absolute top-2 right-2 sm:top-1 sm:right-1 bg-gray-400 border rounded p-2 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5a2 2 0 012-2h2a2 2 0 012-2v2h3a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h3V5zm2 0v2m0 0h6M9 12h.01M9 16h.01"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    copyCode() {
      // Create a textarea and set its value to the trimmed slot content
      const textArea = document.createElement("textarea")
      textArea.value = this.$el.querySelector('.code-block').textContent.trim()
      document.body.appendChild(textArea)

      // Select the textarea and execute the copy command
      textArea.select()
      document.execCommand("copy")

      // Clean up by removing the textarea from the DOM
      document.body.removeChild(textArea)
    }
  }
}
</script>
