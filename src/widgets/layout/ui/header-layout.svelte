<script lang="ts">
import { HeaderLogo, HeaderNavLinks, HeaderSession, HeaderSignin } from "~/entities/layout"
import { SessionOnly } from "~/entities/session"

import { Autocomplete } from "$ui/data"
import { Content, Grid, GridCell, Header } from "$ui/layout"
</script>

<Header class="bg-transparent">
    <Content>
        <Grid>
            <GridCell
                align="middle"
                desktop={2}
                mobile={0}
                tablet={0}
            >
                <HeaderLogo />
            </GridCell>

            <GridCell
                align="middle"
                desktop={4}
                mobile={0}
                tablet={0}
            >
                <Autocomplete />
            </GridCell>

            <GridCell
                class="justify-center"
                align="middle"
                desktop={4}
                mobile={0}
                tablet={0}
            >
                <HeaderNavLinks />
            </GridCell>

            <GridCell
                class="justify-end"
                align="middle"
                desktop={2}
                mobile={0}
                tablet={0}
            >
                <SessionOnly>
                    <HeaderSession />

                    <svelte:fragment slot="fallback">
                        <HeaderSignin />
                    </svelte:fragment>
                </SessionOnly>
            </GridCell>
        </Grid>
    </Content>
</Header>
