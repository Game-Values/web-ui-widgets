<script lang="ts" setup>
import type { SeoRaw } from "~/types"

import { Head as Unhead } from "@unhead/vue/components"

import { Seo } from "~/dto"
import { createModel } from "~/factories"

let { routerClient } = useClients()

let seo = computed((): Seo => (
    createModel<Seo, SeoRaw>(Seo, (
        routerClient.getRouteMeta<SeoRaw>("seo", {
            description: "",
            image: "",
            title: "",
        })
    ))
))
</script>

<template>
<unhead v-if="seo">
    <template v-if="seo.title">
        <title>
            {{ seo.title }}
        </title>

        <meta
            :content="seo.title"
            name="og:title"
        >
    </template>

    <template v-if="seo.description">
        <meta
            :content="seo.description"
            name="description"
        >

        <meta
            :content="seo.description"
            name="og:description"
        >
    </template>

    <template v-if="seo.locales.length">
        <meta
            v-for="locale in seo.locales"
            :key="locale.content"
            :content="locale.content"
            :name="locale.property"
        >
    </template>

    <meta
        v-if="seo.image"
        :content="seo.image"
        name="og:image"
    >

    <meta
        :content="seo.locale"
        name="og:locale"
    >

    <meta
        content="Game Values"
        name="og:site_name"
    >

    <meta
        content="website"
        name="og:type"
    >

    <meta
        :content="useRuntimeConfig().public.baseURL"
        name="og:url"
    >
</unhead>
</template>
