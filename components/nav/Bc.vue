<template>
  <nav class="flex py-4" aria-label="Breadcrumb">
    <ol role="list" class="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8">
      <li class="flex">
        <div class="flex items-center">
          <a href="/" class="text-blue-400 hover:text-blue-500">
            <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </a>
        </div>
      </li>
      <li v-for="page in pagesList" :key="page.name" class="flex">
        <div class="flex items-center">
          <svg class="h-1/2 w-1 flex-shrink-0 text-blue-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" fill="currentColor" stroke="currentColor" stroke-width="2"/>
          </svg>
          <a :href="page.href" class="ml-4 text-sm font-medium text-blue-500 hover:text-blue-700" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
import { HomeIcon } from '@heroicons/vue/20/solid'

export default {
  name: 'Breadcrumb',
  props: {
    pagesList: {
      type: Array,
      required: true,
    },
  },
  components: {
    HomeIcon,
  },
}
</script>
