<template>
<nav-bc :pages-list="pages" />

<div class="flex min-h-full flex-col">
    <!-- 2 column wrapper -->
    <ui-layout-content class="mx-auto w-full grow lg:flex xl:px-2">
        <!-- Left column -->
        <div class="px-4 py-6 sm:px-6 lg:pl-8 xl:w-1/2 xl:shrink-0 xl:pl-6">

            <div class="h-12 lg:h-auto py-4 lg:py-12">
                <nav-steps :steps="steps" />
            </div>

            <div class="flex justify-start items-center gap-6 pb-5">
                <!-- Images and divs taking equal widths on larger screens and stacking on smaller screens -->
                <img
                    class="flex-grow flex-shrink w-full md:w-auto md:max-w-[202px] h-full md:h-[106px] rounded-lg"
                    src="https://via.placeholder.com/202x106"
                >
                <img
                    class="flex-grow flex-shrink w-full md:w-auto md:max-w-[202px] h-full md:h-[106px] rounded-lg"
                    src="https://via.placeholder.com/202x106"
                >
                <div class="flex-grow flex-shrink w-full md:w-auto md:max-w-[202px] h-full md:h-[106px] bg-gradient-to-l from-zinc-900 to-zinc-900 rounded-lg" />

                <!-- Spacer div (assuming you want it only on larger screens) -->
                <div class="hidden md:flex justify-center items-center">
                    <ui-icon-arrow-right-circle
                        class="text-gray-100"
                        size="24"
                    />
                </div>
            </div>

            <div class="w-full md:w-auto h-auto flex-col justify-start items-start gap-3 inline-flex pb-5">
                <div class="self-stretch text-white text-level-3 md:text-3xl font-bold font-montserrat">
                    Gold ArcheAge: Unchained
                </div>
                <div class="self-stretch text-white md:font-normal font-montserrat leading-tight">
                    In-game currency is a special form of currency used within the game for purchases, trading, upgrades, and other in-game purposes. It can be represented as...
                    <span class="text-primary">Show more...</span>
                </div>
            </div>

            <div class="flex justify-between items-start gap-6">
                <div class="flex-col justify-start items-start gap-2">
                    <div class="text-white text-opacity-10 font-normal font-['Montserrat'] uppercase leading-5">
                        Server:
                    </div>
                    <div class="text-white font-normal font-['Montserrat'] leading-tight truncate w-48">
                        Very long server name
                    </div>
                </div>
                <div class="flex-col justify-start items-start gap-2">
                    <div class="text-white text-opacity-10 font-normal font-['Montserrat'] uppercase leading-5">
                        Availability:
                    </div>
                    <div class="text-white font-normal font-['Montserrat'] leading-tight w-20 truncate">
                        120
                    </div>
                </div>
                <div class="flex-col justify-start items-start gap-2">
                    <div class="text-white text-opacity-10 font-normal font-['Montserrat'] uppercase leading-5">
                        Currency:
                    </div>
                    <div class="text-white font-normal font-['Montserrat'] leading-tight w-20 truncate">
                        Gold
                    </div>
                </div>
                <div class="flex-col justify-start items-start gap-2">
                    <div class="text-white text-opacity-10 font-normal font-['Montserrat'] uppercase leading-5">
                        Price per unit:
                    </div>
                    <div class="text-white font-semibold font-['Montserrat'] leading-tight w-20 truncate">
                        20,22
                    </div>
                </div>
            </div>

            <div class="max-w-screen-lg w-full flex-col justify-start items-start gap-8 inline-flex mx-auto">
                <div class="self-stretch flex-col justify-start items-start gap-6 flex">
                    <div class="self-stretch justify-start items-start gap-6 inline-flex">
                        <div class="flex-col justify-start items-start gap-3 inline-flex">
                            <div class="flex-col justify-start items-start gap-4 flex">
                                <div class="text-white text-opacity-10 font-normal leading-tight">
                                    Specify the quantity:
                                </div>
                                <div class="flex-col justify-start items-start gap-3 flex">
                                    <div class="justify-start items-center gap-3 inline-flex">
                                        <div class="h-12 px-4 py-3 bg-white bg-opacity-10 rounded-lg justify-start items-center gap-2.5 flex">
                                            <div class="text-white text-opacity-60 font-normal leading-normal">
                                                I will pay
                                            </div>
                                        </div>
                                        <div class="py-2.5 flex-col justify-center items-start gap-2.5 inline-flex" />
                                        <div class="h-12 px-4 py-3 bg-white bg-opacity-10 rounded-lg justify-start items-center gap-2.5 flex">
                                            <div class="text-white text-opacity-60 font-normal leading-normal">
                                                I will receive
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="justify-center items-center gap-5 inline-flex">
                                <div class="w-5 h-5 origin-top-left transform -rotate-180 justify-center items-center flex">
                                    <div class="w-5 h-5 relative" />
                                </div>
                                <div class="text-white text-opacity-60 font-normal leading-normal">
                                    Minimum 400 units of gold
                                </div>
                            </div>
                        </div>
                        <div class="flex-col justify-start items-start gap-4 inline-flex">
                            <div class="text-white text-opacity-10 font-normal leading-tight">
                                Other filter:
                            </div>
                            <div class="h-12 flex-col justify-start items-start gap-3 flex">
                                <div class="justify-start items-center gap-3 inline-flex">
                                    <div class="h-12 px-4 py-3 bg-white bg-opacity-10 rounded-lg justify-start items-center gap-2.5 flex">
                                        <div class="text-white text-opacity-60 font-normal leading-normal">
                                            Other filter
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-col justify-start items-start gap-4 flex">
                        <div class="text-white text-opacity-10 font-normal leading-tight">
                            Order comment:
                        </div>
                        <div class="px-4 py-3 bg-white bg-opacity-10 rounded-lg justify-start items-center gap-2.5 inline-flex">
                            <div class="flex-grow text-white text-opacity-60 font-normal leading-normal">
                                Specify the method of item transfer (e.g., your in-game username)
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-col justify-start items-start gap-4 flex">
                    <div class="text-white text-opacity-10 font-normal leading-tight">
                        Payment method:
                    </div>
                    <div class="pl-4 pr-3 py-3.5 bg-white bg-opacity-10 rounded-lg justify-start items-center gap-2.5 inline-flex">
                        <div class="w-6 h-6 justify-center items-center flex">
                            <div class="w-6 h-6 relative" />
                        </div>
                        <div class="flex-grow text-white font-semibold leading-tight">
                            With a credit card on the website
                        </div>
                        <div class="w-6 px-px py-1.5 rounded-md flex-col justify-center items-center gap-2.5 inline-flex" />
                    </div>
                </div>
                <div class="flex-col justify-start items-start gap-3 flex">
                    <div class="px-7 py-3.5 bg-blue-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
                        <div class="text-white text-lg font-semibold">
                            Place an order for $1,924
                        </div>
                    </div>
                    <div class="text-white text-opacity-60 font-normal leading-tight">
                        The seller will not receive payment until you confirm that they have fulfilled all obligations.
                    </div>
                </div>
            </div>

            <div class="my-5">
                <marketing-qna :qnas="qnas" />
            </div>

        </div>

        <!-- Right column -->
        <div class="px-4 py-6 sm:px-6 lg:pl-8 xl:w-1/2 xl:shrink-0 xl:pl-6" />
    </ui-layout-content>
</div>
</template>

<script lang="ts" setup>
const qnas = [
    {
        answer: "To improve his graphics! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus expedita illum esse ratione.",
        question: "Why did the video game designer go to school?",
    },
    {
        answer: "Heavy metal... especially when there's a lot of armor involved! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maiores, atque tempore.",
        question: "What's a video game's favorite type of music?",
    },
    {
        answer: "It left its Windows open! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quidem mollitia repellendus laborum.",
        question: "Why was the computer cold at the LAN party?",
    },

]

const steps = [
    { id: "01", name: "Create a deal", status: "complete" },
    { id: "02", name: "Confirm and pay", status: "current" },
    { id: "03", name: "Close a deal", status: "upcoming" },
]

const pages = [
    { href: "https://www.game-values.com/", name: "Users" },
    { href: "https://www.game-values.com/", name: "ArchAge Unchained" },
    { href: "https://www.game-values.com/", name: "Gold" },
    { href: "https://www.game-values.com/", name: "Deal #0123" },
]

definePageMeta({
    layout: "hfull",
})
</script>

<!--
<template>
  <div class="bg-white">
    <ui-layout-content class="mx-auto px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-4xl divide-solid divide-y divide-gray-900/10">
        <h2 class="text-level-3 font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <dl class="mt-10 space-y-6 divide-solid divide-y divide-gray-900/10">
          <ui-headless-disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt>
              <ui-headless-disclosure-button class="flex w-full items-start justify-between text-left text-gray-900">
                <span class="font-semibold leading-7">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                  <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                </span>
              </ui-headless-disclosure-button>
            </dt>
            <ui-headless-disclosure-panel as="dd" class="mt-2 pr-12">
              <p class="leading-7 text-gray-600">{{ faq.answer }}</p>
            </ui-headless-disclosure-panel>
          </ui-headless-disclosure>
        </dl>
      </div>
    </ui-layout-content>
  </div>
</template>

<script setup>
const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]
</script>

-->
