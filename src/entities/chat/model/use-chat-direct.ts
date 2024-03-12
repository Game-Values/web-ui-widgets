import type { ICallable, ISession } from "$types"
import type { Room, RoomMember } from "matrix-js-sdk"
import type { Readable, Writable } from "svelte/store"

import { Preset } from "matrix-js-sdk"
import { derived, get, writable } from "svelte/store"

import { useChat } from "~/entities/chat"

import { useSession, useWatch } from "$model"

type IChatDirect = {
    directRooms: Room[]
}

type IUseChatDirect = {
    directRooms: Readable<Room[]>
    startDirect(chatId: string): Promise<Room>
}

const MAX_DIRECT_MEMBERS: number = 2

let chatDirect: Writable<IChatDirect> = writable<IChatDirect>({
    directRooms: [],
})

export function useChatDirect(): IUseChatDirect {
    let { chatRooms, createRoom, whenChatReady } = useChat()
    let { getSession } = useSession()

    let use: IUseChatDirect = {
        directRooms: derived(chatDirect, ($chatDirect: IChatDirect): Room[] => (
            $chatDirect.directRooms.filter((chatRoom: Room): boolean => {
                let roomMembers: RoomMember[] = chatRoom.getMembers()

                return (
                    roomMembers.length <= MAX_DIRECT_MEMBERS &&
                    roomMembers.some((roomMember: RoomMember): boolean => Boolean(roomMember.getDMInviter()))
                )
            })
        )),

        startDirect: async (userId: string): Promise<Room> => (
            new Promise((resolve: ICallable): void => (
                whenChatReady(async (): Promise<void> => {
                    let directRooms: Room[] = get<Room[]>(use.directRooms)
                    let session: ISession = getSession()

                    let directRoom: Room | undefined = directRooms.find((room: Room): boolean => {
                        let roomMembers: RoomMember[] = room.getMembers()

                        return (
                            roomMembers.length <= MAX_DIRECT_MEMBERS &&
                            roomMembers.some((roomMember: RoomMember): boolean => (
                                [session.user!.chat_id, userId].includes(roomMember.userId)
                            ))
                        )
                    })

                    if (!directRoom) {
                        directRoom = await createRoom({
                            invite: [userId],
                            is_direct: true,
                            preset: Preset.TrustedPrivateChat,
                        })

                        chatDirect.set({ directRooms: [...get(chatDirect).directRooms, directRoom] })
                    }

                    resolve(directRoom)
                })
            ))
        ),
    }

    useWatch(chatRooms, (): void => chatDirect.set({ directRooms: get<Room[]>(chatRooms) }))

    return use
}
