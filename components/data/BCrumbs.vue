<template>
  <ol :class="wrapperClass" vocab="http://schema.org/" typeof="BreadcrumbList">
    <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" property="itemListElement" typeof="ListItem" class="inline text-white">
      <span :class="breadcrumbClass(breadcrumb)">
        <template v-if="breadcrumb.link">
          <nuxt-link :to="breadcrumb.link" property="item" typeof="WebPage">
            <span property="name">{{ breadcrumb.label }}</span>
          </nuxt-link>
        </template>
        <template v-else>
          <span property="name">{{ breadcrumb.label }}</span>
        </template>
      </span>
      <meta property="position" :content="(index + 1).toString()">
      <span v-if="index < breadcrumbs.length - 1" :class="separatorClass">&nbsp;/&nbsp;</span>
    </li>
  </ol>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
    },
    wrapperClass: {
      type: String,
      default: 'w-[604px]',
    },
  },
  methods: {
    breadcrumbClass(breadcrumb: any) {
      return breadcrumb.link
        ? "text-blue-500 text-sm font-normal font-['Montserrat'] leading-tight"
        : "text-white text-opacity-70 text-sm font-normal font-['Montserrat'] leading-tight";
    },
    separatorClass() {
      return "!text-white text-sm font-normal font-['Montserrat'] leading-tight mx-1 inline";
    },
  },
});
</script>
