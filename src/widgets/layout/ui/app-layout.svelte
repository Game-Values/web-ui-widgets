<script lang="ts">
import { Footer } from "~/widgets/footer"
import { Header } from "~/widgets/header"
</script>

<section class="h-full flex flex-col">
    <Header />

    <main class="flex-auto">
        <slot />
    </main>

    <Footer />
</section>
