<script lang="ts" setup>
let { storeClient } = useClients()

let { facetsQuery } = storeToRefs(storeClient.facetsStore)
</script>

<template>
<v-space>
    <template
        v-for="(facetValue, facet) in facetsQuery"
        :key="facet"
    >
        <template v-if="isArray(facetValue)">
            <v-tag
                v-for="val in facetValue"
                :key="val"
                circle
                closable
                @close="
                    storeClient.facetsStore.setFacetsQuery({
                        ...facetsQuery,

                        [facet]: useDifference(facetValue, [val]),
                    })
                "
            >
                {{ facet }}: {{ val }}
            </v-tag>
        </template>

        <template
            v-else-if="isString(facetValue)"
        >
            <v-tag
                circle
                closable
                @close="storeClient.facetsStore.setFacetsQuery(useOmit(facetsQuery, facet))"
            >
                {{ facetValue }}
            </v-tag>
        </template>
    </template>
</v-space>
</template>
