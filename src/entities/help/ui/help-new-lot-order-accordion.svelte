<script lang="ts">
import { Accordion, Collapse } from "$ui/data"
</script>

<Accordion
    collapseClass="collapse-arrow"
    contentClass="text-secondary"
    titleClass="text-lg"
>
    <Collapse title="How to Initiate a Transaction?">
        <div
            class="alert block"
            role="alert"
        >
            <ul class="list-circle list-inside">
                <li>
                    <mark class="bg-transparent text-success">
                        Step 1:
                    </mark>

                    Choose the offer you are interested in on the page.
                </li>

                <li>
                    <mark class="bg-transparent text-success">
                        Step 2:
                    </mark>

                    Confirm the order and make the payment.
                </li>

                <li>
                    <mark class="bg-transparent text-success">
                        Step 3:
                    </mark>

                    Receive the purchased item and confirm the transaction.
                </li>
            </ul>
        </div>
    </Collapse>

    <Collapse title="Is it safe to conduct transactions through this site?">
        <div
            class="alert block"
            role="alert"
        >
            Yes, all transactions are protected by our security system.
            The seller will receive the money only after you confirm receipt of the item.
        </div>
    </Collapse>

    <Collapse title="How can I contact the seller?">
        <div
            class="alert block"
            role="alert"
        >
            On the offer page, there is a section for message exchange between the buyer and the seller.
            Ensure you have contacted the seller before making a purchase.
        </div>
    </Collapse>

    <Collapse title="Can I add images to my listing?">
        <div
            class="alert block"
            role="alert"
        >
            Yes, you can add up to 10 images to your listing by dragging them into the designated area
            or using the "Select Files" button.
        </div>
    </Collapse>

    <Collapse title="What if I haven't received the purchased item?">
        <div
            class="alert block"
            role="alert"
        >
            If you encounter problems or delays in delivery, we recommend contacting the seller first.
            If the issue is unresolved, contact our site's support service.
        </div>
    </Collapse>

    <Collapse title="What payment methods are available?">
        <div
            class="alert block"
            role="alert"
        >
            We offer various payment methods, including credit cards on the site.
        </div>
    </Collapse>

    <Collapse title="Can I cancel the transaction?">
        <div
            class="alert block"
            role="alert"
        >
            If the transaction has not yet been confirmed, you can cancel it.
            In case of problems, we recommend contacting the support service.
        </div>
    </Collapse>

    <Collapse title="How to leave a review about the seller?">
        <div
            class="alert block"
            role="alert"
        >
            After completing the transaction, you can leave a review about the seller.
            This helps other buyers make an informed choice.
        </div>
    </Collapse>

    <Collapse title="What if I have additional questions?">
        <div
            class="alert block"
            role="alert"
        >
            If you have any additional questions or problems, you can always contact our support service.
        </div>
    </Collapse>

    <Collapse title="What if the seller does not respond for a long time after payment?">
        <div
            class="alert block"
            role="alert"
        >
            If the seller does not respond within the set time, please contact our site's support service.
            We will help you resolve this situation.
        </div>
    </Collapse>

    <Collapse title="What if the seller provided an item or service of poor quality?">
        <div
            class="alert block"
            role="alert"
        >
            In case the received item or service does not match the description or has other quality
            issues, we recommend immediately contacting the support service to resolve the issue.
        </div>
    </Collapse>

    <Collapse title="What if the item has been transferred but the buyer does not confirm the transaction?">
        <div
            class="alert block"
            role="alert"
        >
            If the buyer does not confirm receipt of the item within a certain time, contact the support service.
            We will act according to the platform's rules to resolve the situation.
        </div>
    </Collapse>

    <Collapse
        title="
            What if the seller asks you to follow a link or
            continue communication in Telegram/Discord or any external resource?
        "
    >
        <div
            class="alert block"
            role="alert"
        >
            We strongly advise against following any provided links and to continue communication only
            through our platform. This protects you from potential fraudulent actions.
            If the seller insists on communicating through external resources, report this to the support service.
        </div>
    </Collapse>
</Accordion>
