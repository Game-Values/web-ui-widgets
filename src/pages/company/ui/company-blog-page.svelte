<script lang="ts">
import { useRoute } from "$model"
import { EnhancedImage } from "$ui/data"
import { Container, Divider, Grid, GridCol } from "$ui/layout"

let { route: mainRoute } = useRoute("/")
</script>

<Grid
    fluid
    gap={0}
>
    <GridCol class="hero relative py-16">
        <div class="hero-overlay absolute top-0 left-0 bg-gradient-accent-light-to-dark">
            <EnhancedImage
                --height="100%"
                --width="100%"
                alt="polygon-bg"
                size="lg"
                src="images/bg/polygon-bg.png"
            />
        </div>

        <div class="hero-content">
            <Container class="gap-y-4 flex flex-col items-center">
                <h1>
                    World-Leading Peer 2 Peer Digital Platform for Gamers
                </h1>

                <p class="text-center">
                    <strong>
                        Buy, sell, and discover exclusive digital in-game items
                    </strong>
                </p>

                <a
                    class="btn btn-sm btn-ring"
                    href={$mainRoute}
                >
                    GameValues Platform
                </a>
            </Container>
        </div>
    </GridCol>

    <GridCol class="bg-neutral text-neutral-content">
        <Grid subgrid>
            <GridCol>
                <Container>
                    <h5 class="w-full flex items-center justify-between">
                        Version 1.0 - The Launch

                        <time
                            class="badge badge-lg badge-success rounded"
                            datetime="todo: 2025 May 10"
                        >
                            2023 May 10
                        </time>
                    </h5>

                    <dl>
                        <dt>
                            <b>
                                What's new
                            </b>
                        </dt>

                        <dd>
                            <ul>
                                <li>
                                    Introduction of GameValues platform: A new digital marketplace for gamers.
                                </li>

                                <li>
                                    User Registration: Gamers can now create their own accounts.
                                </li>

                                <li>
                                    Listing and Trading: Users can list their in-game items for sale or trade.
                                </li>

                                <li>
                                    Secure Transactions: Enhanced security measures for safe trading.
                                </li>
                            </ul>
                        </dd>
                    </dl>

                    <dl>
                        <dt>
                            <b>
                                Improvements
                            </b>
                        </dt>

                        <dd>
                            <ul>
                                <li>
                                    Optimized user interface for easier navigation
                                </li>

                                <li>
                                    Initial bug fixes for registration and listing processes
                                </li>
                            </ul>
                        </dd>
                    </dl>

                    <dl>
                        <dt>
                            <b>
                                Bug fix
                            </b>
                        </dt>

                        <dd>
                            <ul>
                                <li>
                                    Fixed an issue where users were unable to complete the registration
                                    process due to an error in the verification email.
                                </li>

                                <li>
                                    Addressed a glitch causing item listings to disappear from the marketplace
                                    under certain conditions.
                                </li>

                                <li>
                                    Resolved a problem with payment processing that some users experienced
                                    during transactions.
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </Container>
            </GridCol>
        </Grid>
    </GridCol>
</Grid>

<style>
h5 {
    @apply mb-4;
}

dl,
ul {
    @apply ms-8;
}

dl {
    @apply mb-8;
}

ul {
    @apply mt-1;
}
</style>
