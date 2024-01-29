<script lang="ts">
import { FooterLayout, HeaderLayout } from "~/widgets/layout"
</script>

<section class="h-full flex flex-col">
    <HeaderLayout />

    <main class="flex-auto">
        <slot />
    </main>

    <FooterLayout />
</section>
