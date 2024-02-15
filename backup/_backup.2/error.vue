<script lang="ts" setup>
import type { H3Error } from "h3"

interface Props {
    error: H3Error
}

let props = defineProps<Props>()

console.error(props.error)
</script>

<template>
<pre>
    {{ error }}
</pre>
</template>
