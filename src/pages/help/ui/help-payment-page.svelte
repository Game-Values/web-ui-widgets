<script lang="ts">
import { Accordion, Collapse } from "$ui/data"
</script>

<Accordion
    contentClass="text-sm text-secondary"
    titleClass="text-lg"
>
    <Collapse title="What payment methods do you accept?">
        We accept most major credit cards, as well as payment systems such as WebMoney, VISA,
        and others.
    </Collapse>

    <Collapse title="How does the refund process work?">
        If you are not satisfied with a purchase, contact the seller or support service to discuss return
        or replacement options.
    </Collapse>
</Accordion>
