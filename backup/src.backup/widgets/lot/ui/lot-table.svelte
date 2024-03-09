<DataTable>
    <Head>
        <Row>
            <Cell width={250}>
                Seller
            </Cell>

            <Cell>
                Description
            </Cell>

            <Cell width={150}>
                In Stock
            </Cell>

            <Cell width={150}>
                Price
            </Cell>
        </Row>
    </Head>

    <Body>
        {#each lots as lot (lot.id)}
            <Row>
                <Cell>
                    <div class="flex gap-x-4">
                        <Button
                            class="mb-auto button-link"
                            href="/u/{lot.owner_id}"
                        >
                            <UserAvatar
                                online={true}
                                size={45}
                            />
                        </Button>

                        <div class="flex flex-col gap-y-1">
                            <Button
                                class="button-link"
                                href="/u/{lot.owner_id}"
                            >
                                Username
                            </Button>

                            <small class="text-white/60">
                                0% comp. deals
                            </small>

                            <div class="flex items-center gap-x-2">
                                    <span class="text-positive-light">
                                        <IconHandThumbUp />

                                        <small>
                                            0%
                                        </small>
                                    </span>

                                <span class="text-primary">
                                        <IconArrowSmallUp />

                                        <small>
                                            1
                                        </small>
                                    </span>
                            </div>
                        </div>
                    </div>
                </Cell>

                <Cell>
                    <p class="flex flex-col gap-y-2">
                        <Button
                            class="button-link"
                            href="/"
                        >
                            {lot.name}
                        </Button>

                        <span class="text-white/60 empty:(hidden)">
                                {lot.attributes.description}
                            </span>
                    </p>
                </Cell>

                <Cell>
                    {lot.attributes.amount}
                </Cell>

                <Cell>
                    <b>
                        {formatPrice(lot.attributes.price, lot.attributes.currency)}
                    </b>
                </Cell>
            </Row>
        {/each}
    </Body>

    <LinearProgress
        closed={!$isLotsSearching}
        indeterminate
        slot="progress"
    />
</DataTable>

<script lang="ts">
import type { IItemRaw } from "~/shared/api"

import DataTable, { Head, Body, Row, Cell } from "@smui/data-table"
import Button from "@smui/button"
import LinearProgress from "@smui/linear-progress"

import IconHandThumbUp from "~icons/heroicons/hand-thumb-up"
import IconArrowSmallUp from "~icons/heroicons/arrow-small-up"

import { isLotsSearching } from "~/entities/lot"
import { UserAvatar } from "~/entities/user"
import { formatPrice } from "~/shared/lib"

export let lots: IItemRaw[] = []
</script>
