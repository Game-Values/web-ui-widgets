<script lang="ts">
import type { LayoutData } from "$types"

import "uno.css"

import "~/app/assets/styles/index.scss"
import { AppLayout } from "~/widgets/layout"
import { DialogProvider, PreviewProvider, SessionProvider } from "~/widgets/provider"

export let data: LayoutData
</script>

<SessionProvider session={data.session}>
    <PreviewProvider />

    <AppLayout>
        <slot />
    </AppLayout>

    <DialogProvider />
</SessionProvider>
