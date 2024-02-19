<script lang="ts">
import type { IGame } from "$schema/api"

import { useGame } from "~/entities/game"

import { EnhancedImage } from "$ui/data"

interface $$Props {
    game?: IGame
}

let game: IGame | undefined = undefined

$: gameIcon = game ? useGame(game).gameIcon : ""

export {
    game,
}
</script>

<div class="card card-bordered overflow-hidden backdrop-blur-2xl">
    <div class="card-body">
        <div class="hero">
            <div class="hero-content p-0 justify-between">
                <div class="p-8 flex flex-col">
                    <h1 class="card-title font-bold text-4xl items-center">
                        Sell with Us!

                        <EnhancedImage
                            --image-width="6.25rem"
                            alt="main-slide"
                            sizes="(min-width: 320px) 320px"
                            src="~/app/assets/images/common/dall-e.png"
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

                    <ul class="mt-12 ms-6 list-disc list-inside">
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
                        --image-width="25rem"
                        src={gameIcon}
                    />
                {/if}
            </div>
        </div>
    </div>
</div>
