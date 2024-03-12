<script lang="ts">
import { Drawer } from "~/widgets/drawer"
import { Footer } from "~/widgets/footer"
import { Navbar } from "~/widgets/navbar"
import { BackgroundImageProvider, ChatProvider, ModalProvider, QueryProvider, SeoProvider } from "~/widgets/provider"

import { Container } from "$ui/layout"

interface $$Slots {
    default: NonNullable<unknown>
}
</script>

<QueryProvider>
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
                    <slot />
                </div>

                <Footer />
            </main>
        </Drawer>

        <ChatProvider />

        <ModalProvider />

        <SeoProvider />
    </Container>
</QueryProvider>
