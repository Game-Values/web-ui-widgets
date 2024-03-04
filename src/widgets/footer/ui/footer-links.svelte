<script lang="ts">
import { FooterLink, footerLinks } from "~/widgets/footer"
</script>

{#each footerLinks as footerLink (footerLink.label)}
    <nav>
        <h6 class="footer-title capitalize text-white/[0.12]">
            {footerLink.label}
        </h6>

        <ul class="gap-y-2 flex flex-col">
            {#each footerLink.links as footerSublink (footerSublink.label)}
                <li class="text-sm">
                    <FooterLink link={footerSublink} />
                </li>
            {/each}
        </ul>
    </nav>
{/each}
