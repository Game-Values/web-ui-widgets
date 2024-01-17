<script lang="ts" setup>
// todo: view

definePageMeta({
    seo: {
        title: "Sales",
    },
})

// todo: from httpInstance
// let salesData = [
//     {
//         Amount: "+17 240 $",
//         Buyer: { name: "12345678" },
//         Date: "08.08.23, 11:44",
//         Game: "ArcheAge",
//         Id: "1",
//         Item: "A golden sword of destiny",
//         Status: "Ordered",
//     },
//     {
//         Amount: "+17 240 $",
//         Buyer: { name: "12345678" },
//         Date: "08.08.23, 11:44",
//         Game: "ArcheAge",
//         Id: "1",
//         Item: "A golden sword of destiny",
//         Status: "Ordered",
//     },
//     {
//         Amount: "+17 240 $",
//         Buyer: { name: "12345678" },
//         Date: "08.08.23, 11:44",
//         Game: "ArcheAge",
//         Id: "1",
//         Item: "A golden sword of destiny",
//         Status: "Ordered",
//     },
//     {
//         Amount: "+17 240 $",
//         Buyer: { name: "12345678" },
//         Date: "08.08.23, 11:44",
//         Game: "ArcheAge",
//         Id: "1",
//         Item: "A golden sword of destiny",
//         Status: "Ordered",
//     },
// ]
</script>

<template>
<v-space
    size="large"
    vertical
>
    <v-text>
        Sales
    </v-text>
<!--    <v-title :level="3">-->
<!--        Current Sales-->
<!--    </v-title>-->

<!--    <v-table :data="salesData">-->
<!--        <v-table-column-->
<!--            :width="100"-->
<!--            id-key="Id"-->
<!--            name="Id"-->
<!--        />-->

<!--        <v-table-column-->
<!--            id-key="Date"-->
<!--            name="Date"-->
<!--        />-->

<!--        <v-table-column-->
<!--            id-key="Game"-->
<!--            name="Game"-->
<!--        />-->

<!--        <v-table-column-->
<!--            id-key="Item"-->
<!--            name="Item"-->
<!--        />-->

<!--        <v-table-column-->
<!--            :width="150"-->
<!--            id-key="Amount"-->
<!--            name="Amount"-->
<!--        />-->

<!--        <v-table-column-->
<!--            v-slot="{ row, rowIndex }"-->
<!--            :width="150"-->
<!--            id-key="Buyer"-->
<!--            name="Buyer"-->
<!--        >-->
<!--            <v-space-->
<!--                align="center"-->
<!--                size="large"-->
<!--                no-wrap-->
<!--            >-->
<!--                <profile-header-avatar :online="Boolean(rowIndex % 2)" />-->

<!--                <v-title :level="6">-->
<!--                    {{ row.Buyer.name }}-->
<!--                </v-title>-->
<!--            </v-space>-->
<!--        </v-table-column>-->

<!--        <v-table-column-->
<!--            id-key="Status"-->
<!--            name="Status"-->
<!--        />-->
<!--    </v-table>-->

<!--    <v-title :level="3">-->
<!--        Sales Archive-->
<!--    </v-title>-->

<!--    <v-table :data="salesData">-->
<!--        <v-table-column-->
<!--            :width="100"-->
<!--            id-key="Id"-->
<!--            name="Id"-->
<!--        />-->

<!--        <v-table-column-->
<!--            id-key="Date"-->
<!--            name="Date"-->
<!--        />-->

<!--        <v-table-column-->
<!--            id-key="Game"-->
<!--            name="Game"-->
<!--        />-->

<!--        <v-table-column-->
<!--            id-key="Item"-->
<!--            name="Item"-->
<!--        />-->

<!--        <v-table-column-->
<!--            :width="150"-->
<!--            id-key="Amount"-->
<!--            name="Amount"-->
<!--        />-->

<!--        <v-table-column-->
<!--            v-slot="{ row, rowIndex }"-->
<!--            :width="150"-->
<!--            id-key="Buyer"-->
<!--            name="Buyer"-->
<!--        >-->
<!--            <v-space-->
<!--                align="center"-->
<!--                size="large"-->
<!--                no-wrap-->
<!--            >-->
<!--                <profile-header-avatar :online="Boolean(rowIndex % 2)" />-->

<!--                <v-title :level="6">-->
<!--                    {{ row.Buyer.name }}-->
<!--                </v-title>-->
<!--            </v-space>-->
<!--        </v-table-column>-->

<!--        <v-table-column-->
<!--            id-key="Status"-->
<!--            name="Status"-->
<!--        />-->
<!--    </v-table>-->
</v-space>
</template>
