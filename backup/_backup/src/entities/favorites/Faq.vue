<template>
<v-collapse>
    <v-collapse-panel>
        <template #title>
            What is the "Favorites" section?
        </template>

        <v-text disabled>
            This section allows you to save your favorite games and sellers for quick access. You will
            also receive notifications about updates from your favorite sellers.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel>
        <template #title>
            How do I add a game or seller to "Favorites"?
        </template>

        <v-text disabled>
            Simply click on the heart icon next to the game's name or the seller's profile. When the icon
            turns red, the item is added to "Favorites".
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="How do I find out about new offers or updates from favored sellers?">
        <v-text disabled>
            In the "Updates" section, you will see all the latest news and offers from the sellers you have
            added to "Favorites".
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel>
        <template #title>
            How do I remove a game or seller from "Favorites"?
        </template>

        <v-text disabled>
            To remove an item from "Favorites", simply click on the heart icon again. It will return to its
            normal state, and the item will be removed.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel>
        <template #title>
            What is the "AI Assistant" in the top menu?
        </template>

        <v-text disabled>
            "AI Assistant" is an intelligent assistant that can help you with questions or problems on the
            site.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="Can I change the interface language?">
        <v-text disabled>
            Yes, to do this, click on the language icon (for example, "RU") at the bottom of the page and
            select the language you need from the dropdown list.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="How do I contact the site support?">
        <v-text disabled>
            If you have additional questions or problems, you can leave your email address in the "Any
            questions?" section, and we will contact you as soon as possible.
        </v-text>
    </v-collapse-panel>
</v-collapse>
</template>
