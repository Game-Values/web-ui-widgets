<script lang="ts" setup>
// todo: from api

let { t } = useI18n({
    useScope: "local",
})

let lotsData = [
    {
        Amount: 10,
        Description: "A golden sword of destiny",
        Price: "175,85",
        Seller: { deals: "90%", id: 1, liked: "72%", name: "12345678", rating: "15" },
        Server: "EU",
    },
    {
        Amount: 5,
        Description: "The shield of ages",
        Price: "120,70",
        Seller: { deals: "85%", id: 2, liked: "60%", name: "John", rating: "20" },
        Server: "NA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 3,
        Description: "Helmet of the brave",
        Price: "50,35",
        Seller: { deals: "78%", id: 3, liked: "80%", name: "Leo", rating: "25" },
        Server: "EU",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 8,
        Description: "Boots of speed",
        Price: "60,15",
        Seller: { deals: "92%", id: 4, liked: "68%", name: "Emma", rating: "30" },
        Server: "ASIA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 6,
        Description: "Bow of silence",
        Price: "80,99",
        Seller: { deals: "80%", id: 5, liked: "85%", name: "Olivia", rating: "18" },
        Server: "EU",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 9,
        Description: "Dagger of stealth",
        Price: "45,55",
        Seller: { deals: "89%", id: 6, liked: "75%", name: "Lucas", rating: "22" },
        Server: "NA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 2,
        Description: "Armor of the titan",
        Price: "220,10",
        Seller: { deals: "88%", id: 7, liked: "90%", name: "Sophia", rating: "29" },
        Server: "ASIA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 11,
        Description: "Ring of fire",
        Price: "40,45",
        Seller: { deals: "76%", id: 8, liked: "62%", name: "Ella", rating: "16" },
        Server: "EU",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 7,
        Description: "Amulet of the sea",
        Price: "90,05",
        Seller: { deals: "90%", id: 9, liked: "79%", name: "James", rating: "27" },
        Server: "NA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 4,
        Description: "Wand of the mage",
        Price: "110,75",
        Seller: { deals: "85%", id: 10, liked: "81%", name: "Lily", rating: "21" },
        Server: "ASIA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 8,
        Description: "Bracelet of the wind",
        Price: "35,85",
        Seller: { deals: "82%", id: 11, liked: "70%", name: "Aiden", rating: "17" },
        Server: "EU",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 6,
        Description: "Cloak of invisibility",
        Price: "99,25",
        Seller: { deals: "88%", id: 12, liked: "65%", name: "Isabella", rating: "28" },
        Server: "NA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 10,
        Description: "Staff of power",
        Price: "130,40",
        Seller: { deals: "79%", id: 13, liked: "69%", name: "Ethan", rating: "19" },
        Server: "ASIA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 9,
        Description: "Quiver of endless arrows",
        Price: "50,60",
        Seller: { deals: "91%", id: 14, liked: "73%", name: "Mia", rating: "23" },
        Server: "EU",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 7,
        Description: "Flute of the siren",
        Price: "70,15",
        Seller: { deals: "86%", id: 15, liked: "77%", name: "Daniel", rating: "24" },
        Server: "NA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 8,
        Description: "Lantern of guiding light",
        Price: "65,20",
        Seller: { deals: "84%", id: 16, liked: "83%", name: "Ava", rating: "26" },
        Server: "ASIA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 5,
        Description: "Gloves of dexterity",
        Price: "55,80",
        Seller: { deals: "80%", id: 17, liked: "71%", name: "Liam", rating: "31" },
        Server: "EU",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 6,
        Description: "Charm of luck",
        Price: "48,90",
        Seller: { deals: "87%", id: 18, liked: "64%", name: "Charlotte", rating: "20" },
        Server: "NA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 3,
        Description: "Orb of clarity",
        Price: "89,10",
        Seller: { deals: "81%", id: 19, liked: "78%", name: "Jacob", rating: "32" },
        Server: "ASIA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 7,
        Description: "Potion of rejuvenation",
        Price: "25,35",
        Seller: { deals: "90%", id: 20, liked: "82%", name: "Emily", rating: "25" },
        Server: "EU",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
]
</script>

<template>
<ui-data-table
    :data="lotsData"
    :row-height="110"
>
    <ui-data-table-col
        #default="{ row }"
        :name="t('Seller')"
        :width="250"
        id-key="Seller"
    >
        <ui-layout-space
            align="center"
            size="large"
            no-wrap
        >
            <user-avatar />

            <ui-layout-space
                size="small"
                vertical
                no-wrap
            >
                <ui-typography-title :level="6">
                    {{ row.Seller.name }}
                </ui-typography-title>

                <ui-typography-text>
                    <i18n-t keypath="Deals">
                        <template #percent>
                            {{ row.Seller.deals }}
                        </template>
                    </i18n-t>
                </ui-typography-text>

                <ui-layout-space
                    size="large"
                    no-wrap
                >
                    <ui-typography-text
                        :color="useTheme('colors.success')"
                        class="flex-items-center gap-x-2"
                    >
                        <ui-base-icon>
                            <i class="i-heroicons:hand-thumb-up" />
                        </ui-base-icon>

                        {{ row.Seller.liked }}
                    </ui-typography-text>

                    <ui-typography-text
                        :color="useTheme('colors.primary')"
                        class="flex-items-center"
                    >
                        <ui-base-icon>
                            <i class="i-heroicons:arrow-small-up" />
                        </ui-base-icon>

                        {{ row.Seller.rating }}
                    </ui-typography-text>
                </ui-layout-space>
            </ui-layout-space>
        </ui-layout-space>
    </ui-data-table-col>

    <ui-data-table-col
        :name="t('Description')"
        id-key="Description"
    />

    <ui-data-table-col
        :name="t('Server')"
        id-key="Server"
    />

    <ui-data-table-col
        :name="t('Availability')"
        id-key="Amount"
        sorter
    />

    <ui-data-table-col
        :name="t('Price')"
        id-key="Price"
        sorter
    />
</ui-data-table>
</template>

<style lang="sass" scoped>

</style>

<i18n lang="yaml">
de:
    Seller: Verkäufer
    Description: Beschreibung
    Server: Server
    Availability: Verfügbarkeit
    Price: Preis
    Deals: "{percent} Angebote"
en:
    Seller: Seller
    Description: Description
    Server: Server
    Availability: Availability
    Price: Price
    Deals: "{percent} Deals"
</i18n>
