<script lang="ts">
import { HelpQuestionsCard } from "~/entities/help"
import { HelpQuestionsForm } from "~/features/help"
</script>

<HelpQuestionsCard>
    <svelte:fragment slot="helpQuestionsForm">
        <HelpQuestionsForm />
    </svelte:fragment>
</HelpQuestionsCard>
