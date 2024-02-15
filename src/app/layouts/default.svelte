<script lang="ts">
import { Drawer } from "~/widgets/drawer"
import { Footer } from "~/widgets/footer"
import { Navbar } from "~/widgets/navbar"
import { ModalProvider } from "~/widgets/provider"

import { page } from "$app/stores"
import { Container } from "$ui/layout"

$page.state.modal
</script>

<Container
    class="p-0"
    fluid
    tag="section"
>
    <Navbar />

    <Drawer>
        <main class="min-h-full flex flex-col">
            <div class="relative flex-auto">
                <slot />
            </div>

            <Footer />
        </main>
    </Drawer>

    <ModalProvider />
</Container>
