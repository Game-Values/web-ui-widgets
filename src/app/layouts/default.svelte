<script lang="ts">
import { Drawer } from "~/widgets/drawer"
import { Footer } from "~/widgets/footer"
import { Navbar } from "~/widgets/navbar"
import { BackgroundImageProvider, ModalProvider } from "~/widgets/provider"

import { VisibleOnly } from "$ui/actions"
import { Container } from "$ui/layout"
</script>

<Container
    class="p-0"
    fluid
    tag="section"
>
    <Navbar />

    <VisibleOnly>
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
    </VisibleOnly>

    <ModalProvider />
</Container>
