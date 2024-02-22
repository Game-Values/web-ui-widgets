<script lang="ts">
import type { ILotNewListingPageContext } from "~/pages/lot"

import { useGame } from "~/entities/game"

import { useContext } from "$model"
import { EnhancedImage } from "$ui/data"

let { context } = useContext<ILotNewListingPageContext>()

$: gameIcon = $context.game && useGame($context.game).gameIcon
</script>

<div class="card overflow-hidden glass glass-xs">
    <div class="card-body">
        <div class="hero">
            <div class="hero-content p-0 justify-between">
                <div class="p-8 gap-y-2 flex flex-col">
                    <h1 class="card-title font-bold text-4xl items-center">
                        Sell with Us!

                        <EnhancedImage
                            --width="6.25rem"
                            alt="main-slide"
                            size="xs"
                            src="images/common/dall-e.png"
                        />
                    </h1>

                    <p>
                        <b>
                            Join our active community and experience the convenience
                            and security of our GameValues platform.
                        </b>

                        <br />

                        <b>
                            We prioritize your peace of mind, ensuring every transaction
                            is not just swift but also safeguarded.
                        </b>
                    </p>

                    <ul class="mt-8 ms-8 list-circle list-inside">
                        <li>
                            <b>
                                Quick Sales
                            </b>

                            <span class="text-secondary">
                                Our way of selling is simple, so you can sell your
                                gaming stuff fast to people who really want to buy
                            </span>
                        </li>

                        <li>
                            <b>
                                Safe Trading
                            </b>

                            <span class="text-secondary">
                                Feel safe when you sell.
                                We use strong safety steps to protect your sales
                            </span>
                        </li>

                        <li>
                            <b>
                                Worldwide Buyers
                            </b>

                            <span class="text-secondary">
                                People from all over can see and buy what you're selling
                            </span>
                        </li>

                        <li>
                            <b>
                                24/7 Here
                            </b>

                            <span class="text-secondary">
                                Got questions? We're here to help, any day, any time
                            </span>
                        </li>
                    </ul>
                </div>

                {#if gameIcon}
                    <EnhancedImage
                        --width="25rem"
                        src={gameIcon}
                    />
                {/if}
            </div>
        </div>
    </div>
</div>
