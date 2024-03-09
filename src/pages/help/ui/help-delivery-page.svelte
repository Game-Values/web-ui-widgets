<script lang="ts">
import { Accordion, Collapse } from "$ui/data"
</script>

<Accordion
    contentClass="text-sm text-secondary"
    titleClass="text-lg"
>
    <Collapse title="How is delivery carried out?">
        For digital goods, a link or activation key will be sent to your email immediately after
        payment. For physical goods, delivery information will be provided by the seller after the
        purchase is made.
    </Collapse>

    <Collapse title="How long does delivery take?">
        Delivery time depends on the type of item and its location. The seller will provide estimated
        delivery times.
    </Collapse>
</Accordion>
