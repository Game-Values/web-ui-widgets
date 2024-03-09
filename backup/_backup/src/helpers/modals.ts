import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { ModalToken } from "~/enums"
import { LoginModal, RecoveryPasswordModal, RegistrationModal } from "~/dialog"

interface ModalsTokens {
    [ModalToken.AUTH_LOGIN]: Token<LoginModal>
    [ModalToken.AUTH_RECOVERY_PASSWORD]: Token<RecoveryPasswordModal>
    [ModalToken.AUTH_REGISTRATION]: Token<RegistrationModal>
}

export class Modals extends DIAbstract<ModalsTokens> {
    protected __tokens: ModalsTokens = {
        [ModalToken.AUTH_LOGIN]: token<LoginModal>(ModalToken.AUTH_LOGIN),
        [ModalToken.AUTH_RECOVERY_PASSWORD]: token<RecoveryPasswordModal>(ModalToken.AUTH_RECOVERY_PASSWORD),
        [ModalToken.AUTH_REGISTRATION]: token<RegistrationModal>(ModalToken.AUTH_REGISTRATION),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[ModalToken.AUTH_LOGIN], LoginModal],
            [this.__tokens[ModalToken.AUTH_RECOVERY_PASSWORD], RecoveryPasswordModal],
            [this.__tokens[ModalToken.AUTH_REGISTRATION], RegistrationModal],
        ]
    }

    protected get __injections(): Injection[] {
        return [

        ]
    }

    // @Memoize()
    public get loginModal(): LoginModal {
        return this.__getInjection(this.__tokens[ModalToken.AUTH_LOGIN])
    }

    // @Memoize()
    public get recoveryPasswordModal(): RecoveryPasswordModal {
        return this.__getInjection(this.__tokens[ModalToken.AUTH_RECOVERY_PASSWORD])
    }

    // @Memoize()
    public get registrationModal(): RegistrationModal {
        return this.__getInjection(this.__tokens[ModalToken.AUTH_REGISTRATION])
    }
}
