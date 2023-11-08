<template>
<nav-bc :pages-list="pages"/>

<div class="flex min-h-full flex-col">
    <!-- 2 column wrapper -->
    <ui-layout-content class="mx-auto w-full grow lg:flex xl:px-2">
        <!-- Left column -->
        <div class="px-4 py-6 sm:px-6 lg:pl-8 xl:w-1/2 xl:shrink-0 xl:pl-6">

            <div class="flex p-4 bg-gray-800 bg-opacity-77 rounded-xl border border-white border-opacity-0 items-start gap-4">
                <div class="flex-none relative w-48 h-48 md:w-24 md:h-24">
                    <img
                    class="absolute top-0 left-0 w-full h-full rounded-full shadow border-4 border-cyan-300"
                    src="https://via.placeholder.com/196x196">
                    <div class="absolute bottom-0 left-3/4 p-2 bg-blue-500 rounded-full flex items-center gap-2">
                        <div class="w-3 h-3 shadow flex items-center justify-center">
                            <div class="w-3 h-3 relative"/>
                        </div>
                    </div>
                </div>
                <div class="flex-grow flex flex-col justify-start items-start gap-2">
                    <div class="flex items-center gap-2">
                        <div class="text-white text-4xl font-bold font-montserrat md:text-level-3">
                            User Name
                        </div>
                        <!-- Germany Flag Icon (using Unicode) -->
                        <span class="text-xl">🇩🇪</span>

                        <!-- Level Text -->
                        <div class="text-primary font-normal font-montserrat">
                            Level
                        </div>

                        <!-- Up Arrow using Heroicons -->
                        <ui-icon-up
                            class="text-primary"
                            size="20"
                        />

                        <!-- Level Number -->
                        <div class="text-primary font-normal font-montserrat">
                            12
                        </div>
                    </div>

                    <div class="text-green-500 font-semibold font-montserrat leading-tight">
                        Online
                    </div>
                    <div class="text-white text-opacity-60 font-normal font-montserrat leading-tight md:w-64">
                        Brief
                        profile description, seller or store information in 2-3 lines
                    </div>
                    <div class="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-10 rounded-lg">
                        <div class="text-white font-semibold font-montserrat leading-tight">
                            Send Message
                        </div>
                    </div>
                </div>
                <div class="flex-none flex items-center justify-center w-6 h-6">
                    <div class="relative w-6 h-6"/>
                </div>
            </div>

            <!--    TABS    -->
            <div class="w-full h-[34px] justify-start items-start flex bg-gray-850 bg-opacity-77">
                <div
                class="flex-1 h-[34px] px-3 py-[7px] bg-blue-500 rounded-tl-lg rounded-bl-lg justify-center items-center gap-1.5 flex">
                    <div class="text-white text-opacity-70 font-semibold font-['Montserrat'] leading-tight">
                        Storefront
                    </div>
                </div>
                <div
                class="flex-1 h-[34px] px-3 py-[7px] bg-white bg-opacity-0 rounded-tr-lg rounded-br-lg justify-center items-center gap-1.5 flex">
                    <div class="text-white text-opacity-70 font-normal font-['Montserrat'] leading-tight">
                        Reviews
                    </div>
                </div>
            </div>

            <!--    GAME 1    -->

            <div class="w-full h-[92px] pl-[5px] pr-[21px] py-1.5 bg-gray-800 bg-opacity-77 rounded-[17px] justify-start items-center gap-[18px] inline-flex">
                <img class="w-20 h-20 relative rounded-xl border border-white" src="https://via.placeholder.com/80x80">
                <div class="flex-grow flex-shrink flex-basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                    <div class="text-white text-[17px] font-bold font-['Montserrat'] truncate">
                        Artifact
                    </div>
                    <div class="text-white font-normal font-['Montserrat'] leading-tight truncate">
                        113 lots
                    </div>
                </div>
                <div class="w-8 h-8 p-0.5 justify-center items-center flex">
                    <ui-icon-arrow-down-circle
                        color="white"
                        size="32"
                    />
                </div>
            </div>

            <!-- GAME 2 -->
            <div class="w-full h-auto flex-col justify-start items-end gap-3 inline-flex pt-1">
                <div class="w-full pl-[5px] pr-[21px] py-1.5 bg-gray-800 bg-opacity-77 rounded-[17px] shadow border border-white border-opacity-0 justify-start items-center gap-[18px] inline-flex">
                    <img class="w-20 h-20 relative rounded-xl border border-white" src="https://via.placeholder.com/80x80">
                    <div class="flex-grow flex-col justify-start items-start gap-1.5 inline-flex">
                        <div class="text-white text-[17px] font-bold font-['Montserrat'] truncate">
                            Word of Warcraft
                        </div>
                        <div class="text-white font-normal font-['Montserrat'] leading-tight">
                            38 lots
                        </div>
                    </div>
                    <div class="w-8 h-8 p-0.5 justify-center items-center flex">
                        <ui-icon-arrow-up-circle
                            color="white"
                            size="32"
                        />
                    </div>
                </div>
                <div class="w-full pb-3 bg-gray-800 bg-opacity-77 rounded-xl border border-white border-opacity-0 flex-col justify-end items-start flex">
                    <div class="w-full px-6 py-3 border-b-2 border-white border-opacity-0 justify-between items-start inline-flex">
                        <div class="flex-1 text-white font-semibold font-['Montserrat'] leading-tight">
                            Server
                        </div>
                        <div class="flex-2 text-white font-semibold font-['Montserrat'] leading-tight">
                            Item
                        </div>
                        <div class="flex-1 text-white font-semibold font-['Montserrat'] leading-tight">
                            Availability
                        </div>
                        <div class="flex-none w-20 text-white font-semibold font-['Montserrat'] leading-tight">
                            Price
                        </div>
                    </div>
                    <!-- Repeat the item blocks as necessary -->
                    <div class="w-full px-6 py-2.5 border-b border-white border-opacity-0 justify-between items-start inline-flex">
                        <div class="flex-1 text-white font-normal font-['Montserrat'] leading-tight">
                            Server EU
                        </div>
                        <div class="flex-2 flex-col justify-start items-start gap-1.5 inline-flex">
                            <div class="self-stretch text-white font-semibold font-['Montserrat'] leading-tight">
                                Title
                            </div>
                            <div class="self-stretch text-white text-opacity-60 font-normal font-['Montserrat'] leading-tight">
                                Description text in two lines, with ellipsis at the end of the line<br>ывапр
                            </div>
                        </div>
                        <div class="flex-1 text-white font-normal font-['Montserrat'] leading-tight">
                            12
                        </div>
                        <div class="flex-none w-20 text-white font-semibold font-['Montserrat'] leading-tight">
                            2 000 $
                        </div>
                    </div>
                    <div class="w-full px-6 py-2.5 border-b border-white border-opacity-0 justify-between items-start inline-flex">
                        <div class="flex-1 text-white font-normal font-['Montserrat'] leading-tight">
                            Server EU
                        </div>
                        <div class="flex-2 flex-col justify-start items-start gap-1.5 inline-flex">
                            <div class="self-stretch text-white font-semibold font-['Montserrat'] leading-tight">
                                Title
                            </div>
                            <div class="self-stretch text-white text-opacity-60 font-normal font-['Montserrat'] leading-tight">
                                Description text in two lines, with ellipsis at the end of the line<br>ывапр
                            </div>
                        </div>
                        <div class="flex-1 text-white font-normal font-['Montserrat'] leading-tight">
                            12
                        </div>
                        <div class="flex-none w-20 text-white font-semibold font-['Montserrat'] leading-tight">
                            2 000 $
                        </div>
                    </div>
                    <div class="w-full px-6 py-2.5 border-b border-white border-opacity-0 justify-between items-start inline-flex">
                        <div class="flex-1 text-white font-normal font-['Montserrat'] leading-tight">
                            Server EU
                        </div>
                        <div class="flex-2 flex-col justify-start items-start gap-1.5 inline-flex">
                            <div class="self-stretch text-white font-semibold font-['Montserrat'] leading-tight">
                                Title
                            </div>
                            <div class="self-stretch text-white text-opacity-60 font-normal font-['Montserrat'] leading-tight">
                                Description text in two lines, with ellipsis at the end of the line<br>ывапр
                            </div>
                        </div>
                        <div class="flex-1 text-white font-normal font-['Montserrat'] leading-tight">
                            12
                        </div>
                        <div class="flex-none w-20 text-white font-semibold font-['Montserrat'] leading-tight">
                            2 000 $
                        </div>
                    </div>
                    <div class="w-full px-6 py-2.5 border-b border-white border-opacity-0 justify-between items-start inline-flex">
                        <div class="flex-1 text-white font-normal font-['Montserrat'] leading-tight">
                            Server EU
                        </div>
                        <div class="flex-2 flex-col justify-start items-start gap-1.5 inline-flex">
                            <div class="self-stretch text-white font-semibold font-['Montserrat'] leading-tight">
                                Title
                            </div>
                            <div class="self-stretch text-white text-opacity-60 font-normal font-['Montserrat'] leading-tight">
                                Description text in two lines, with ellipsis at the end of the line<br>ывапр
                            </div>
                        </div>
                        <div class="flex-1 text-white font-normal font-['Montserrat'] leading-tight">
                            12
                        </div>
                        <div class="flex-none w-20 text-white font-semibold font-['Montserrat'] leading-tight">
                            2 000 $
                        </div>
                    </div>
                    <!-- Repeat block end -->
                </div>
            </div>

        </div>

        <!-- Right column -->
        <div class="px-4 py-6 sm:px-6 lg:pl-8 xl:w-1/2 xl:shrink-0 xl:pl-6">

            <div class="w-full h-auto px-4 py-6 bg-gray-800 bg-opacity-77 rounded-xl border border-white border-opacity-0 flex-col justify-start items-start gap-5 inline-flex">
                <div class="text-white text-level-3 font-bold font-['Montserrat']">
                    Statistics
                </div>
                <div class="self-stretch text-white font-normal font-['Montserrat'] leading-tight">
                    Registered on 12.03.2023
                </div>
                <div class="flex justify-start items-center gap-5">
                    <div class="flex items-center gap-2">
                        <div class="text-green-500">
                            👍
                        </div>
                        <div class="text-green-500 font-semibold font-['Montserrat'] leading-tight">
                            100
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="text-white text-opacity-10">
                            👎
                        </div>
                        <div class="text-white text-opacity-10 font-semibold font-['Montserrat'] leading-tight">
                            32
                        </div>
                    </div>
                </div>
                <div class="self-stretch text-white text-opacity-60 font-normal font-['Montserrat'] leading-tight">
                    72% completed deals
                </div>
                <div class="flex justify-start items-start gap-5 flex-wrap">
                    <div class="w-1/4 p-4 bg-gray-900 bg-opacity-30 rounded flex-col justify-start items-start gap-3">
                        <div class="text-white text-opacity-60 font-normal font-['Montserrat'] leading-tight">
                            Items bought:
                        </div>
                        <div class="text-white font-bold font-['Montserrat']">
                            184
                        </div>
                    </div>
                    <div class="w-1/4 p-4 bg-gray-900 bg-opacity-30 rounded flex-col justify-start items-start gap-3">
                        <div class="text-white text-opacity-60 font-normal font-['Montserrat'] leading-tight">
                            Items sold:
                        </div>
                        <div class="text-white font-bold font-['Montserrat']">
                            123
                        </div>
                    </div>
                    <div class="w-1/4 p-4 bg-gray-900 bg-opacity-30 rounded flex-col justify-start items-start gap-3">
                        <div class="text-white text-opacity-60 font-normal font-['Montserrat'] leading-tight">
                            Total purchase amount:
                        </div>
                        <div class="text-white font-bold font-['Montserrat']">
                            $ 123 000
                        </div>
                    </div>
                    <div class="w-1/4 p-4 bg-gray-900 bg-opacity-30 rounded flex-col justify-start items-start gap-3">
                        <div class="text-white text-opacity-60 font-normal font-['Montserrat'] leading-tight">
                            Total sales amount:
                        </div>
                        <div class="text-white font-bold font-['Montserrat']">
                            $ 134 000
                        </div>
                    </div>
                </div>
                <div class="self-stretch h-auto flex-col justify-start items-start gap-5 flex">
                    <div class="self-stretch text-white font-semibold font-['Montserrat']">
                        Achievements
                    </div>
                    <div class="flex justify-start items-start gap-5 flex-wrap">
                        <div class="flex-col justify-start items-start gap-2">
                            <img class="w-16 h-16 rounded shadow border-2 border-white" src="https://via.placeholder.com/58x58">
                        </div>
                        <div class="flex-col justify-start items-start gap-2">
                            <img class="w-16 h-16 rounded shadow border-2 border-white" src="https://via.placeholder.com/58x58">
                        </div>
                        <div class="flex-col justify-start items-start gap-2">
                            <img class="w-16 h-16 rounded shadow border-2 border-white" src="https://via.placeholder.com/58x58">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </ui-layout-content>
</div>
</template>

<script lang="ts" setup>
const pages = [
    { current: false, href: "https://www.game-values.com/", name: "Users" },
    { current: true, href: "https://www.game-values.com/", name: "Profile name: <example>" },
]

definePageMeta({
    layout: "hfull",
})
</script>
