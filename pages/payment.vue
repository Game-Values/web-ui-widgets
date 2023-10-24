<template>
  <div class="min-h-screen flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-fig_dark_1">
    <main class="w-full">
      <h1 class="text-gray-100">PAYMENTS</h1>
      <PaymentSteps :currentStep="1" />
      <PaymentSteps :currentStep="2" />
      <PaymentSteps :currentStep="3" />
    </main>
  </div>
</template>

<script setup lang="ts">
import PaymentSteps from "~/components/PaymentSteps.vue"

definePageMeta({
  layout: "home"
})
</script>
