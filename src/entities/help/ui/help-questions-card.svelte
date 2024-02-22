<script lang="ts">
import { EnhancedImage } from "$ui/data"

interface $$Slots {
    helpQuestionsForm: NonNullable<unknown>
}
</script>

<figure class="card hero glass h-96">
    <figcaption class="hero-content p-0 justify-between">
        <div class="p-16 max-w-prose">
            <slot name="helpQuestionsForm" />
        </div>

        <EnhancedImage
            --height="100%"
            alt="soldier"
            src="images/common/soldier.png"
        />
    </figcaption>
</figure>
