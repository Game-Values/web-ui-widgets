<script lang="ts">
import { Drawer } from "~/widgets/drawer"
import { Footer } from "~/widgets/footer"
import { Navbar } from "~/widgets/navbar"
import { ModalProvider } from "~/widgets/provider"

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
                px-6 py-10
                min-h-full
                flex flex-col
            "
        >
            <div class="flex-auto">
                <slot />
            </div>

            <Footer />
        </main>
    </Drawer>

    <ModalProvider />
</Container>
