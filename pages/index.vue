<template>
  <div class="min-h-screen flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <main class="w-full">
      <div class="w-full">
        <h1 class="text-2xl font-bold text-blue-500">Components</h1>
        <div class="overflow-x-auto">
          <SystemSearch htmlTableId="components"></SystemSearch>

          <table class="w-full min-w-full divide-y divide-gray-200" id="components">
            <thead>
            <tr>
              <th
                class="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Component
              </th>
              <th
                class="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Usage
              </th>
            </tr>
            </thead>
            <tbody class="bg-black divide-y divide-gray-200">
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
                <GameCard class="w-[15rem]"
                          :game="{link:'/g/atlas', name:'Atlas', image:'atlas'}"
                          :stock-amount="'14789'" />
              </td>
              <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                <SystemCode>
                  &lt;GameCard :game="{link:'/games/1', name:'Atlas', image:'atlas'}"
                  :stock-amount="'14789'" />
                </SystemCode>
              </td>
            </tr>
            <tr>
              <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                <GameCard :game="{link:'/games/1', name:'Atlas', image:'atlas'}"
                          :stock-amount="'14789'" liked />
              </td>
              <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                <SystemCode>
                  &lt;GameCard :game="{link:'/games/1', name:'Atlas', image:'atlas'}"
                  :stock-amount="'14789'" liked />
                </SystemCode>
              </td>
            </tr>
            <tr>
              <td colspan="2">
<!--                <GamesIndex :games="games" header-component="h3" />-->
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <GamesIndex :games="games" header-component="h3" />
      </div>
    </main>
  </div>
</template>


<script setup lang="ts">
import { Game } from "~/components/GameCard.vue"

definePageMeta({
  layout: "home"
})


const games: Game[] = [
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
