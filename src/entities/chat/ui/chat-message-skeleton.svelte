<script lang="ts">
interface $$Props {
    length?: number
}

export let length: number = 1
</script>

{#each Array(length) as _, i (i)}
    <div class="mt-4 gap-x-4 flex items-center">
        <div class="skeleton w-8 h-8 shrink-0 bg-secondary rounded-full opacity-25" />

        <div class="flex flex-col gap-2 flex-1">
            {#each Array(2) as _, i (i)}
                <div class="skeleton h-2 w-full bg-secondary opacity-25" />
            {/each}
        </div>
    </div>
{/each}
