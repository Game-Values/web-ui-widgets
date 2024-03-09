<script lang="ts">
import { FooterLink, footerSocialLinks } from "~/widgets/footer"
</script>

<nav class="gap-x-6 flex">
    {#each footerSocialLinks as footerSocialLink (footerSocialLink.url)}
        <FooterLink
            link={footerSocialLink}
            target="_blank"
        >
            <i class="icon text-4xl">
                <svelte:component this={footerSocialLink.icon} />
            </i>
        </FooterLink>
    {/each}
</nav>
