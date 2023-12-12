<script lang="ts" setup>
definePageMeta({
    seo: {
        title: "Balance",
    },
})

// todo: from api
// let balanceData = [
//     {
//         Amount: "+17 240 $",
//         Date: "08.08.23, 11:44",
//         Deals: "175,85",
//         Status: "Completed",
//         Type: "Incoming",
//     },
//     {
//         Amount: "+17 240 $",
//         Date: "08.08.23, 11:44",
//         Deals: "175,85",
//         Status: "Completed",
//         Type: "Incoming",
//     },
//     {
//         Amount: "+17 240 $",
//         Date: "08.08.23, 11:44",
//         Deals: "175,85",
//         Status: "Completed",
//         Type: "Incoming",
//     },
//     {
//         Amount: "+17 240 $",
//         Date: "08.08.23, 11:44",
//         Deals: "175,85",
//         Status: "Completed",
//         Type: "Incoming",
//     },
//     {
//         Amount: "+17 240 $",
//         Date: "08.08.23, 11:44",
//         Deals: "175,85",
//         Status: "Completed",
//         Type: "Incoming",
//     },
// ]
</script>

<template>
<v-space
    size="large"
    vertical
>
    <v-text>
        Balance
    </v-text>
<!--    <v-text disabled>-->
<!--        Available for withdrawal-->
<!--    </v-text>-->

<!--    <v-title-->
<!--        :level="1"-->
<!--    >-->
<!--        <v-space-->
<!--            align="center"-->
<!--            size="large"-->
<!--        >-->
<!--            <v-text>-->
<!--                17 240 $-->
<!--            </v-text>-->

<!--            <v-button type="primary">-->
<!--                Withdraw-->
<!--            </v-button>-->
<!--        </v-space>-->
<!--    </v-title>-->

<!--    <v-title :level="3">-->
<!--        Transactions-->
<!--    </v-title>-->

<!--    <v-table :data="balanceData">-->
<!--        <v-table-column-->
<!--            id-key="Type"-->
<!--            name="Type"-->
<!--        />-->

<!--        <v-table-column-->
<!--            id-key="Date"-->
<!--            name="Date"-->
<!--        />-->

<!--        <v-table-column-->
<!--            id-key="Deals"-->
<!--            name="Deals"-->
<!--        />-->

<!--        <v-table-column-->
<!--            id-key="Amount"-->
<!--            name="Amount"-->
<!--        />-->

<!--        <v-table-column-->
<!--            id-key="Status"-->
<!--            name="Status"-->
<!--        />-->
<!--    </v-table>-->
</v-space>
</template>
