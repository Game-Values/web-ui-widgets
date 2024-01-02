<script lang="ts">
import "~/app/styles/app.postcss"

import { AppShell } from "@skeletonlabs/skeleton"
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		Page Header
	</svelte:fragment>

	<svelte:fragment slot="default">
		<slot />
	</svelte:fragment>

	<svelte:fragment slot="pageFooter">
		Page Footer
	</svelte:fragment>
</AppShell>