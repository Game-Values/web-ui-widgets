<template>
<ui-layout-content class="min-h-screen flex mx-auto px-2 sm:px-6 lg:px-8">
    <main class="w-full">
        <div class="w-full">
            <h1 class="text-level-3 font-bold text-primary">Components</h1>
            <div class="overflow-x-auto">
                <SystemSearch htmlTableId="components"></SystemSearch>

                <table class="w-full min-w-full divide-gray-200 divide-solid divide-y" id="components">
                    <thead>
                        <tr>
                            <th
                                class="px-4 sm:px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                                Component
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                                Usage
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-black divide-gray-200 divide-solid divide-y">
                        <tr>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <ButtonMessages :muted="true" />
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <SystemCode>
                                    &lt;ButtonMessages :muted="true" />
                                </SystemCode>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <ButtonMessages :muted="true" :count="3" />
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <SystemCode>
                                    &lt;ButtonMessages :muted="true" :count="3" />
                                </SystemCode>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <ButtonMessages :muted="false" />
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <SystemCode>
                                    &lt;ButtonMessages :muted="false" />
                                </SystemCode>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <ButtonMessages :muted="false" :count="3" />
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <SystemCode>
                                    &lt;ButtonMessages :muted="false" :count="3" />
                                </SystemCode>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <ButtonMessages :count="3" />
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <SystemCode>
                                    &lt;ButtonMessages :count="3" />
                                </SystemCode>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 sm:px-6 py-4 w-[28rem]">
                                <GameCard link="/games/atlas" name="Atlas" image="atlas" itemsPosted="100500" />
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <SystemCode>
                                    &lt;GameCard link="/games/atlas"
                                    name="Atlas"
                                    image="atlas" itemsPosted="100500"/>
                                </SystemCode>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <GameCard link="/games/atlas" name="Atlas" image="atlas" liked itemsPosted="100500" />
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <SystemCode>
                                    &lt;GameCard link="/games/atlas"
                                    name="Atlas"
                                    image="atlas" liked itemsPosted="100500"/>
                                </SystemCode>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div style="max-height: 200px; overflow: auto;">
                                    <GameList :games="Cards" header-component="h3" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <SystemCode>
                                    &nbsp;GameList :games="Cards" header-component="h3" />
                                </SystemCode>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="max-height: 200px; overflow: auto;">
                                    <GeneralStatistics goods="0123" deals="1234" online="2345" users="3456" />
                                </div>
                            </td>
                            <td>
                                <SystemCode>
                                    &nbsp;GeneralStatistics goods="0123" deals="1234" online="2345" users="3456" />
                                </SystemCode>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="2">
                                <div style="overflow: auto;">
                                    <SliderSlide :horizontal-image="horizontalImage" :vertical-image="verticalImage">
                                        <p class="text-white">Some promo text</p>
                                    </SliderSlide>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <SystemCode>
                                    <pre>
&lt;SliderSlide
:horizontal-image="{{ horizontalImage }}"
:vertical-image="{{ verticalImage }}"
>
&lt;p class="text-white">Some promo text&lt;/p>
&lt;/SliderSlide>
                </pre>
                                </SystemCode>
                            </td>
                        </tr>

                        <Timeline />
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</ui-layout-content>
</template>


<script setup lang="ts">
import type { GameCard } from "~/components/game/Card.vue"

import Timeline from "@/widgets/components/Timeline.vue"

const horizontalImage = "https://picsum.photos/seed/test1/1200/500.webp"
const verticalImage = "https://picsum.photos/seed/test2/900/1000.webp"


const Cards: GameCard[] = [
    {
        name: "ARK: Survival asdfasdf asdf asdfas df asd fasd fasd fasdfasdfasdf",
        image: "atlas",
        link: "/game/2"
    },
    {
        name: "ARK: Survival",
        image: "atlas",
        link: "/game/2"
    },
    {
        name: "ARK: Survival",
        image: "atlas",
        link: "/game/2"
    },
    {
        name: "Atlas",
        image: "atlas",
        link: "/game/1"
    },
    {
        name: "Player Unknown's Battlegrounds",
        image: "atlas",
        link: "/game/2"
    },
    {
        name: "Brawl Stars",
        image: "atlas",
        link: "/game/2"
    }
]
</script>
