<script lang="ts">
import { companyMissions, companyProducts, companyValues, companyWhoWeAreList } from "~/pages/company"

import { EnhancedImage } from "$ui/data"
import { Container, Grid, GridCol } from "$ui/layout"
</script>

<Grid
    fluid
    gap={0}
>
    <GridCol class="hero relative py-16">
        <div class="hero-overlay absolute top-0 left-0 bg-gradient-accent-light-to-dark">
            <EnhancedImage
                alt="minecraft-bg"
                size="lg"
                src="images/bg/polygon-bg.png"
            />
        </div>

        <div class="hero-content">
            <Container class="gap-y-4 flex flex-col items-center">
                <h1>
                    World-Leading Peer 2 Peer Digital Platform for Gamers
                </h1>

                <p>
                    <strong>
                        Buy, sell, and discover exclusive digital in-game items
                    </strong>
                </p>

                <button class="btn btn-sm btn-ring">
                    GameValues Platform
                </button>
            </Container>
        </div>
    </GridCol>

    <GridCol class="bg-neutral text-neutral-content">
        <Container>
            <Grid subgrid>
                <GridCol
                    class="py-10 gap-y-6 flex-col"
                    span={6}
                >
                    <h1>
                        Who We Are
                    </h1>

                    {#each companyWhoWeAreList as companyWhoWeAre, i (i)}
                        <p>
                            <strong>
                                {companyWhoWeAre}
                            </strong>
                        </p>
                    {/each}
                </GridCol>

                <GridCol span={6}>
                    <EnhancedImage
                        --height="32rem"
                        alt="who-we-are"
                        src="images/common/who-we-are.png"
                    />
                </GridCol>
            </Grid>
        </Container>
    </GridCol>

    <GridCol class="py-6 bg-gradient-accent-light-to-dark">
        <Container>
            <Grid subgrid>
                <GridCol span={6}>
                    <h1>
                        Our Missions
                    </h1>
                </GridCol>

                <GridCol span={6}>
                    <ul class="gap-y-4 flex flex-col">
                        {#each companyMissions as companyMission, i (i)}
                            <li class="gap-x-4 flex items-center">
                                <span class="text-5xl">
                                    {i + 1}
                                </span>

                                {companyMission}
                            </li>
                        {/each}
                    </ul>
                </GridCol>
            </Grid>
        </Container>
    </GridCol>

    <GridCol class="py-6 bg-neutral text-neutral-content font-secondary">
        <Container>
            <Grid subgrid>
                <GridCol justify="center">
                    <h1>
                        Our Values
                    </h1>
                </GridCol>

                {#each companyValues as companyValue (companyValue.label)}
                    <GridCol
                        class="px-20 py-10 gap-y-6 flex-col"
                        align="center"
                        span={4}
                    >
                        <i class="icon text-error text-4xl drop-shadow-icon">
                            <svelte:component this={companyValue.icon} />
                        </i>

                        <h4>
                            {companyValue.label}
                        </h4>

                        <p class="text-center">
                            <small>
                                {companyValue.description}
                            </small>
                        </p>
                    </GridCol>
                {/each}
            </Grid>
        </Container>
    </GridCol>

    <GridCol class="hero relative py-16">
        <div class="hero-overlay absolute top-0 left-0 bg-gradient-accent-light-to-dark">
            <EnhancedImage
                alt="minecraft-bg"
                size="lg"
                src="images/bg/minecraft-bg.png"
            />
        </div>

        <div class="hero-content">
            <Container>
                <Grid subgrid>
                    <GridCol justify="center">
                        <h1>
                            Our Products
                        </h1>
                    </GridCol>

                    {#each companyProducts as companyProduct (companyProduct.label)}
                        <GridCol
                            class="px-40 py-10 gap-y-6 flex-col"
                            align="center"
                            span={4}
                        >
                            <i class="icon text-4xl drop-shadow-icon">
                                <svelte:component this={companyProduct.icon} />
                            </i>

                            <b class="text-center">
                                {companyProduct.label}
                            </b>
                        </GridCol>
                    {/each}
                </Grid>
            </Container>
        </div>
    </GridCol>
</Grid>
