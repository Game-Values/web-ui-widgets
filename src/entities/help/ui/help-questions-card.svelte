<script lang="ts">
import { EnhancedImage } from "$ui/data"

interface $$Props {
    vertical?: boolean
}

interface $$Slots {
    helpQuestionsForm: NonNullable<unknown>
}

export let vertical: boolean = false
</script>

<figure
    style:height={vertical ? "45rem" : "25rem"}
    class="card hero glass"
>
    <figcaption
        class="hero-content p-0 justify-between"
        class:flex-col={vertical}
    >
        <div class="p-16 w-full max-w-prose">
            <slot name="helpQuestionsForm" />
        </div>

        <EnhancedImage
            --height="100%"
            class={vertical ? "ml-auto" : ""}
            alt="soldier"
            src="images/common/soldier.png"
        />
    </figcaption>
</figure>
