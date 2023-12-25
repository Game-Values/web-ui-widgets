<template>
<v-input
    placeholder="Search by description"
    clearable
    @input="$emit('change', $event)"
>
    <template #suffix>
        <ui-icon
            heroicons="magnifying-glass"
            size="18"
        />
    </template>
</v-input>
</template>
