<script lang="ts">
import type { MatrixEvent, RoomMember } from "matrix-js-sdk"

import { onMount, tick } from "svelte"

import { useChat } from "~/entities/chat"

import { useSession } from "$model"

let { startChat } = useChat()
let { user } = useSession()

onMount(startChat)
</script>
