<script lang="ts">
import type { IAppLayoutData } from "~/widgets/layout"

import "uno.css"

import "~/app/assets/styles/index.scss"
import { AppLayout } from "~/widgets/layout"
import {
    BreadcrumbProvider,
    DialogProvider,
    PreviewProvider,
    SessionProvider,
} from "~/widgets/provider"

export let data: IAppLayoutData
</script>

<SessionProvider session={data.session}>
    <PreviewProvider />

    <AppLayout>
        <BreadcrumbProvider />

        <slot />
    </AppLayout>

    <DialogProvider />
</SessionProvider>
