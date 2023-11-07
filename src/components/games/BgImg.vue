<template>
<div
:style="backgroundImage"
class="relative bg-no-repeat bg-cover h-[394px] bg-gradient-to-b from-black to-black">
    <slot/>
</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"

export default defineComponent({
    props: {
        imagePath: {
            default: "/game_cover.png",
            type: String,
        },
        shiftAmount: {
            default: "70%",
            type: String,
        },
    },
    setup(props) {
        let backgroundImage = computed(() => {
            console.log(`url(${props.imagePath})`)  // Log to ensure imagePath is correct
            console.log(`center ${props.shiftAmount}`)  // Log to see the shiftAmount
            return {
                backgroundImage: `url(${props.imagePath})`,
                backgroundPosition: `center ${props.shiftAmount}`,
            }
        })

        return { backgroundImage }
    },
})
</script>
