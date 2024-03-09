<script lang="ts">
import { HelpQuestionsCard } from "~/entities/help"
import { HelpQuestionsForm } from "~/features/help"

interface $$Props {
    vertical?: boolean
}

export let vertical: boolean = false
</script>

<HelpQuestionsCard {vertical}>
    <svelte:fragment slot="helpQuestionsForm">
        <HelpQuestionsForm />
    </svelte:fragment>
</HelpQuestionsCard>
