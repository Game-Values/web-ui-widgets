<script lang="ts">
import { page } from "$app/stores"
import { Container } from "$ui/layout"

import IconExclamationCircle from "virtual:icons/heroicons/exclamation-circle"
</script>

<Container tag="section">
    <div class="alert" role="alert">
        <IconExclamationCircle class="text-xl" />

        <div class="gap-y-4 flex flex-col">
            <h1>
                Error {$page.status}
            </h1>

            {#if $page.error}
                <ul class="ms-8 list-disc">
                    {#each Object.entries($page.error) as [key, val] (key)}
                        <li>
                            <span class="text-secondary">
                                {key}
                            </span>

                            <b>
                                {val}
                            </b>
                        </li>
                    {/each}
                </ul>
            {/if}
        </div>
    </div>
</Container>
