<template>
<nav aria-label="Breadcrumb" class="flex py-4">
    <ol class="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8" role="list">
        <li class="flex">
            <div class="flex items-center">
                <a class="text-blue-400 hover:text-blue-500" href="/">
                    <home-icon aria-hidden="true" class="h-5 w-5 flex-shrink-0"/>
                    <span class="sr-only">Home</span>
                </a>
            </div>
        </li>
        <li :key="page.name" class="flex" v-for="page in pagesList">
            <div class="flex items-center">
                <svg
                aria-hidden="true"
                class="h-1/2 w-1 flex-shrink-0 text-blue-200"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 44">
                    <path
                    d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="2"/>
                </svg>
                <a :aria-current="page.current ? 'page' : undefined" :href="page.href" class="ml-4 text-sm font-medium text-blue-500 hover:text-blue-700">{{ page.name }}</a>
            </div>
        </li>
    </ol>
</nav>
</template>

<script>
import { HomeIcon } from "@heroicons/vue/20/solid"

export default {
    name: "Breadcrumb",
    components: {
        HomeIcon,
    },
    props: {
        pagesList: {
            required: true,
            type: Array,
        },
    },
}
</script>
