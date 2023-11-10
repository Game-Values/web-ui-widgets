<template>
<ol
    :class="[wrapperClass, 'relative z-0']"
    typeof="BreadcrumbList"
    vocab="http://schema.org/"
>
    <li
        :key="index"
        class="inline text-white"
        property="itemListElement"
        v-for="(breadcrumb, index) in breadcrumbs"
        typeof="ListItem"
    >
        <span :class="breadcrumbClass(breadcrumb)">
            <template v-if="breadcrumb.link">
                <nuxt-link
                    :to="breadcrumb.link"
                    property="item"
                    typeof="WebPage"
                >
                    <span property="name">{{ breadcrumb.label }}</span>
                </nuxt-link>
            </template>
            <template v-else>
                <span property="name">{{ breadcrumb.label }}</span>
            </template>
        </span>
        <meta
            :content="(index + 1).toString()"
            property="position"
        >
        <span v-if="index < breadcrumbs.length - 1" :class="separatorClass">&nbsp;/&nbsp;</span>
    </li>
</ol>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    methods: {
        breadcrumbClass(breadcrumb: any) {
            return breadcrumb.link
                ? "text-primary font-normal font-['Montserrat'] leading-tight"
                : "text-white text-opacity-70 font-normal font-['Montserrat'] leading-tight"
    },
        separatorClass() {
            return "!text-white font-normal font-['Montserrat'] leading-tight mx-1 inline"
    },
    },
    props: {
        breadcrumbs: {
            type: Array,
            required: true,
        },
        wrapperClass: {
            type: String,
            default: "w-[604px]",
        },
    },
})
</script>
