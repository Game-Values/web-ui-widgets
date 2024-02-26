<script context="module" lang="ts">
import type { ISeo } from "$types"

import { Locale } from "$lib/enums"

const DEFAULT_SEO: ISeo = {
    locale: Locale.EN,
    title: "Game Values",
}
</script>

<script lang="ts">
import { merge } from "lodash-es"

import { page } from "$app/stores"
import { CANONICAL_URL } from "$config"
import { useState } from "$model"

let { state } = useState()

$: seo = merge($state.seo, DEFAULT_SEO)
</script>

<svelte:head>
    <title>
        {seo.title}
    </title>

    <meta
        name="og:title"
        content={seo.title}
        property="og:title"
    />

    <meta
        name="og:type"
        content="website"
        property="og:type"
    />

    <meta
        name="og:site_name"
        content="Game Values"
        property="og:site_name"
    />

    <meta
        name="og:url"
        content="https://game-values.com"
        property="og:url"
    />

    <link
        href={seo.canonicalUrl || `${CANONICAL_URL}${$page.url.pathname}`}
        rel="canonical"
    />

    {#if seo.description}
        <meta
            name="description"
            content={seo.description}
        />

        <meta
            name="og:description"
            content={seo.description}
            property="og:description"
        />
    {/if}

    {#if seo.image}
        <meta
            name="og:image"
            content={seo.image}
            property="og:image"
        />
    {/if}

    {#if seo.locale}
        <meta
            name="og:locale"
            content={seo.locale}
            property="og:locale"
        />
    {/if}

    {#each Object.values(Locale) as locale (locale)}
        {#if locale !== seo.locale}
            <meta
                name="og:locale:alternate"
                content={locale}
                property="og:locale:alternate"
            />
        {/if}
    {/each}
</svelte:head>
