<script lang="ts">
import { Drawer } from "~/widgets/drawer"
import { Footer } from "~/widgets/footer"
import { Navbar } from "~/widgets/navbar"
import { BackgroundImageProvider, ModalProvider, QueryProvider, SeoProvider } from "~/widgets/provider"

import { Container } from "$ui/layout"
</script>

<Container
    class="p-0"
    fluid
    tag="section"
>
    <Navbar />

    <Drawer>
        <main
            class="
                relative
                min-h-full
                flex flex-col
            "
        >
            <BackgroundImageProvider />

            <div class="relative flex-auto">
                <QueryProvider>
                    <slot />
                </QueryProvider>
            </div>

            <Footer />
        </main>
    </Drawer>

    <ModalProvider />

    <SeoProvider />
</Container>
