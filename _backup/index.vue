<template>
<div class="min-h-screen flex mx-auto px-2 sm:px-6 lg:px-8">
    <main class="w-full">
        <div class="w-full">
            <h1 class="text-level-3 font-bold text-primary">
                Components
            </h1>
            <div class="overflow-x-auto">
                <system-search html-table-id="components" />

                <table class="w-full min-w-full divide-gray-200 divide-solid divide-y" id="components">
                    <thead>
                        <tr>
                            <th
                                class="px-4 sm:px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Component
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Usage
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-black divide-gray-200 divide-solid divide-y">
                        <tr>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <button-messages :muted="true" />
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <system-code>
                                    &lt;ButtonMessages :muted="true" />
                                </system-code>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <button-messages
                                    :count="3"
                                    :muted="true"
                                />
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <system-code>
                                    &lt;ButtonMessages :muted="true" :count="3" />
                                </system-code>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <button-messages :muted="false" />
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <system-code>
                                    &lt;ButtonMessages :muted="false" />
                                </system-code>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <button-messages
                                    :count="3"
                                    :muted="false"
                                />
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <system-code>
                                    &lt;ButtonMessages :muted="false" :count="3" />
                                </system-code>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <button-messages :count="3" />
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <system-code>
                                    &lt;ButtonMessages :count="3" />
                                </system-code>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 sm:px-6 py-4 w-[28rem]">
                                <game-card
                                    image="atlas"
                                    items-posted="100500"
                                    link="/games/atlas"
                                    name="Atlas"
                                />
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <system-code>
                                    &lt;GameCard link="/games/atlas"
                                    name="Atlas"
                                    image="atlas" itemsPosted="100500"/>
                                </system-code>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <game-card
                                    image="atlas"
                                    items-posted="100500"
                                    liked
                                    link="/games/atlas"
                                    name="Atlas"
                                />
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <system-code>
                                    &lt;GameCard link="/games/atlas"
                                    name="Atlas"
                                    image="atlas" liked itemsPosted="100500"/>
                                </system-code>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div style="max-height: 200px; overflow: auto;">
                                    <game-list
                                        :games="Cards"
                                        header-component="h3"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <system-code>
                                    &nbsp;GameList :games="Cards" header-component="h3" />
                                </system-code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="max-height: 200px; overflow: auto;">
                                    <general-statistics
                                        deals="1234"
                                        goods="0123"
                                        online="2345"
                                        users="3456"
                                    />
                                </div>
                            </td>
                            <td>
                                <system-code>
                                    &nbsp;GeneralStatistics goods="0123" deals="1234" online="2345" users="3456" />
                                </system-code>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="2">
                                <div style="overflow: auto;">
                                    <slider-slide
                                        :horizontal-image="horizontalImage"
                                        :vertical-image="verticalImage"
                                    >
                                        <p class="text-white">
                                            Some promo text
                                        </p>
                                    </slider-slide>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <system-code>
                                    <pre>
&lt;SliderSlide
:horizontal-image="{{ horizontalImage }}"
:vertical-image="{{ verticalImage }}"
>
&lt;p class="text-white">Some promo text&lt;/p>
&lt;/SliderSlide>
                </pre>
                                </system-code>
                            </td>
                        </tr>

                        <timeline />
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</ui-layout-content>
</template>

<script setup lang="ts">
import type { GameCard } from "~/components/game/Card.vue"

import Timeline from "~/widgets/components/Timeline.vue"

const horizontalImage = "https://picsum.photos/seed/test1/1200/500.webp"
const verticalImage = "https://picsum.photos/seed/test2/900/1000.webp"

const Cards: GameCard[] = [
    {
        image: "atlas",
        link: "/game/2",
        name: "ARK: Survival asdfasdf asdf asdfas df asd fasd fasd fasdfasdfasdf",
    },
    {
        image: "atlas",
        link: "/game/2",
        name: "ARK: Survival",
    },
    {
        image: "atlas",
        link: "/game/2",
        name: "ARK: Survival",
    },
    {
        image: "atlas",
        link: "/game/1",
        name: "Atlas",
    },
    {
        image: "atlas",
        link: "/game/2",
        name: "Player Unknown's Battlegrounds",
    },
    {
        image: "atlas",
        link: "/game/2",
        name: "Brawl Stars",
    },
]
</script>
