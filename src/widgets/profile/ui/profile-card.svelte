<Card variant="outlined">
    <Content class="flex gap-x-7">
        <UserAvatar size={200} />

        <div class="flex flex-col items-start gap-y-3.5">
            <h1 class="flex items-start gap-x-3.5">
                {user.full_name}

                <span
                    class="
                        inline-flex items-center
                        text-normal text-primary font-normal
                    "
                >
                    Level <IconArrowSmallUp /> 100
                </span>
            </h1>

            <b class="text-success">
                Online
            </b>

            <p class="text-white/60">
                Brief profile description, seller or store information in 2-3 lines
            </p>

            <Button
                color="secondary"
                variant="unelevated"
            >
                Send Message
            </Button>
        </div>

        <div class="ml-auto">
            <IconExclamationTriangle class=" text-level-3 text-white/12" />
        </div>
    </Content>
</Card>

<script lang="ts">
import type { IUser } from "~/entities/user"

import Button from "@smui/button"
import LayoutGrid, { Cell } from "@smui/layout-grid"
import Paper, { Title, Subtitle, Content } from "@smui/paper"
import Card, { Actions, ActionIcons, Media, PrimaryAction } from "@smui/card"

import { UserAvatar } from "~/entities/user"

import IconArrowSmallUp from "~icons/heroicons/arrow-small-up"
import IconExclamationTriangle from "~icons/heroicons/exclamation-triangle"

export let user: IUser
</script>
