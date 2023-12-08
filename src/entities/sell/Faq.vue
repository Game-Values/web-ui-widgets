<template>
<v-collapse>
    <v-collapse-panel
        :style="`
            --vxp-collapse-header-color: ${useTheme('colors.success')};
        `"
        title="How to Sell an Item Quickly?"
    >
        <v-space
            size="large"
            vertical
        >
            <v-u-l>
                <li>
                    <faq-highlight
                        title="Clear Title"
                        type="success"
                    >
                        Your title should be straightforward and reflect the main content of the item.
                        For example, "Dota 2 Account 7000mmr with Baby Roshan"
                    </faq-highlight>
                </li>

                <li>
                    <faq-highlight
                        title="Detailed Description"
                        type="success"
                    >
                        Specify all important characteristics of the item. If it's a game
                        account, mention the character level, main achievements, rare items, etc.
                    </faq-highlight>
                </li>

                <li>
                    <faq-highlight
                        title="Use Understandable Language"
                        type="success"
                    >
                        Avoid jargon and complex terms unless they are
                        commonly accepted in the gaming industry.
                    </faq-highlight>
                </li>

                <li>
                    <faq-highlight
                        title="Add Honest Photos"
                        type="success"
                    >
                        Photos should be high quality and reflect the current condition of the
                        item. If selling a game account, add screenshots of inventory, character stats, and other key
                        features.
                    </faq-highlight>
                </li>

                <li>
                    <faq-highlight
                        title="Be Honest"
                        type="success"
                    >
                        If the item has any flaws or limitations, be sure to mention them in the
                        description. This will save both your and the buyer's time and reduce the risks of
                        dissatisfaction after the purchase.
                    </faq-highlight>
                </li>

                <li>
                    <faq-highlight
                        title="Set a Competitive Price"
                        type="success"
                    >
                        Research the market and set a price that matches the quality and
                        rarity of your item, but is also competitive.
                    </faq-highlight>
                </li>

                <li>
                    <faq-highlight
                        title="Use Promotions or Discounts"
                        type="success"
                    >
                        If your item has been on sale for a long time, consider
                        offering a temporary discount or promotion to attract attention.
                        Update the Description: If the item does not sell for a long time, it may be worth updating
                        or changing the description, adding new information, or highlighting the key benefits of the
                        item.
                    </faq-highlight>
                </li>
            </v-u-l>

            <v-text
                disabled
                strong
            >
                By following these recommendations, you increase your chances of a successful and quick
                sale of your item on the GameValues platform.
            </v-text>
        </v-space>
    </v-collapse-panel>

    <v-collapse-panel
        :style="`
            --vxp-collapse-header-color: ${useTheme('colors.error')};
        `"
        title="How Not to Write a Description for Quick Sale of an Item?"
    >
        <v-space
            size="large"
            vertical
        >
            <v-u-l>
                <li>
                    <faq-highlight
                        title="Incomplete Description"
                        type="error"
                    >
                        Avoid writing a description that's only a few characters long or
                        misleading. Ensure the description is comprehensive so the buyer is not misled about the
                        item's features or condition.
                    </faq-highlight>
                </li>

                <li>
                    <faq-highlight
                        title="Inaccurate Photos"
                        type="error"
                    >
                        Do not post photos that do not correspond to your actual item.
                        Misleading images can lead to mistrust and dissatisfaction from potential buyers.
                    </faq-highlight>
                </li>

                <li>
                    <faq-highlight
                        title="Listing Multiple Duplicates"
                        type="error"
                    >
                        Refrain from listing the same item multiple times. Duplicates
                        created for the purpose of price undercutting will be removed, and users may face penalties.
                    </faq-highlight>
                </li>

                <li>
                    <faq-highlight
                        title="Overuse of Jargon"
                        type="error"
                    >
                        Avoid using too much technical jargon or industry-specific terms that
                        might not be understood by all potential buyers.
                    </faq-highlight>
                </li>

                <li>
                    <faq-highlight
                        title="Hiding Flaws"
                        type="error"
                    >
                        Do not conceal any defects or limitations of the item. Being transparent about
                        the condition of the item builds trust with buyers.
                    </faq-highlight>
                </li>

                <li>
                    <faq-highlight
                        title="Unrealistic Pricing"
                        type="error"
                    >
                        Avoid setting an unrealistically high or low price for your item. This can
                        deter potential buyers or create unrealistic market expectations.
                    </faq-highlight>
                </li>

                <li>
                    <faq-highlight
                        title="Ignoring Buyer Inquiries"
                        type="error"
                    >
                        Failing to respond to potential buyers' questions or concerns in a
                        timely manner can result in lost sales opportunities.
                    </faq-highlight>
                </li>

                <li>
                    <faq-highlight
                        title="Not Updating the Listing"
                        type="error"
                    >
                        If there are any changes to the condition or details of the item,
                        make sure to update the listing promptly. Outdated information can lead to confusion and
                        potential disputes.
                    </faq-highlight>
                </li>
            </v-u-l>

            <v-text
                disabled
                strong
            >
                By avoiding these mistakes, you can enhance the credibility of your listing and improve the
                chances of a quick and successful sale.
            </v-text>
        </v-space>
    </v-collapse-panel>

    <v-collapse-panel title="How do I start the selling process on GameValues?">
        <v-text disabled>
            To start selling, select the game, item type, server, race, and other relevant parameters, then
            fill in all the necessary fields, add images, and click the "Sell" button.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="Can I add images to my listing?">
        <v-text disabled>
            Yes, you can add up to 10 images to your listing by dragging them into the designated area
            or using the "Select Files" button.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="What fees does GameValues charge for selling?">
        <v-text disabled>
            When entering the price of your item, you will see the preliminary cost including the
            GameValues commission.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="What should I do if I made a mistake in the item description?">
        <v-text disabled>
            If your item has not yet been sold, you can go back and edit the item description. If the item
            has already been sold, contact support for additional assistance.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="How can I find out about the status of my item for sale?">
        <v-text disabled>
            You can check the status of your item in the "My Listings" or "Account" section on the
            platform.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="What should I do if my item is not selling for a long time?">
        <v-text disabled>
            Consider revising the price or adding more detailed descriptions and images. You can also
            contact support for advice on selling.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="Can I cancel the sale of an item?">
        <v-text disabled>
            Yes, you can cancel the sale if the item has not yet been sold. Go to the "My Listings"
            section and select the "Cancel Sale" option.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="What should I do if a buyer contacts me after the sale of the item?">
        <v-text disabled>
            All sales and purchase transactions should be conducted through the GameValues platform.
            If the buyer contacts you directly, it is recommended to continue communication through the
            platform and contact support in case of any problems.
        </v-text>
    </v-collapse-panel>
</v-collapse>
</template>
