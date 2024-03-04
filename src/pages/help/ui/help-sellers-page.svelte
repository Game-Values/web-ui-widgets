<script lang="ts">
import { Accordion, Collapse } from "$ui/data"
</script>

<Accordion
    contentClass="text-sm text-secondary"
    titleClass="text-lg"
>
    <Collapse title="How do I list an item for sale?">
        Log in to your account and go to the <q>Sales</q> section. Select the necessary parameters, add
        a description and photos of the item. Set the price and click the <q>Sell</q> button.
    </Collapse>

    <Collapse title="How can I track my sales?">
        In your account, there is a <q>My Sales</q> section where you can monitor the status of your
        items, view offers, and manage orders.
    </Collapse>
</Accordion>
