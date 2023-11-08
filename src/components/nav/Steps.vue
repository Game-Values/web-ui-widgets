<template>
<nav aria-label="Progress">
    <ol class="divide-y divide-solid divide-blue-300 rounded-md border border-blue-300 md:flex md:divide-y-0" role="list">
        <li :key="step.name" class="relative md:flex md:flex-1" v-for="(step, stepIdx) in steps">
            <a :href="step.href" class="group flex w-full items-center" v-if="step.status === 'complete'">
                <span class="flex items-center px-6 py-4 font-medium">
                    <span
                    class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                        <ui-icon-check
                            color="white"
                            size="24"
                        />
                    </span>
                    <span class="ml-4 font-medium text-blue-900">{{ step.name }}</span>
                </span>
            </a>
            <a
            :href="step.href"
            aria-current="step"
            v-else-if="step.status === 'current'"
            class="flex items-center px-6 py-4 font-medium">
                <span
                class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                    <span class="text-indigo-600">{{ step.id }}</span>
                </span>
                <span class="ml-4 font-medium text-indigo-600">{{ step.name }}</span>
            </a>
            <a :href="step.href" class="group flex items-center" v-else>
                <span class="flex items-center px-6 py-4 font-medium">
                    <span
                    class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-300 group-hover:border-blue-400">
                        <span class="text-primary group-hover:text-blue-900">{{ step.id }}</span>
                    </span>
                    <span class="ml-4 font-medium text-primary group-hover:text-blue-900">{{ step.name }}</span>
                </span>
            </a>
            <template v-if="stepIdx !== steps.length - 1">
                <!-- Arrow separator for lg screens and up -->
                <div aria-hidden="true" class="absolute right-0 top-0 hidden h-full w-5 md:block">
                    <svg
                    class="h-full w-full text-blue-300"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 22 80">
                        <path
                        d="M0 -2L20 40L0 82"
                        stroke="currentcolor"
                        stroke-linejoin="round"
                        vector-effect="non-scaling-stroke"/>
                    </svg>
                </div>
            </template>
        </li>
    </ol>
</nav>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        steps: {
            required: true,
            type: Array,
        },
    },
})
</script>
