<template>
<ui-data-badge
    type="success"
    is-dot
>
    <ui-data-avatar />
</ui-data-badge>
</template>

<style lang="sass" scoped>
:deep(.vxp-badge__content)
    top: calc(theme("height.avatar") - theme("spacing.2"))
    right: calc(100% - (theme("width.avatar") - theme("spacing.1")))

    @apply outline outline-2 outline-grey-dark
</style>
