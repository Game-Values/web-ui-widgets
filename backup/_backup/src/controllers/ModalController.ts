import type { Ref } from "vue"

// todo: dynamic dialog loading, not via provider
export class ModalController {
    private _active: Ref<boolean> = ref(false)

    private static _modalsSet: Set<ModalController> = new Set()

    public constructor() {
        if (isClient())
            ModalController._modalsSet.add(this)
    }

    private static _hideAll(): void {
        ModalController._modalsSet.forEach((modal: ModalController): void => modal.hide())
    }

    public hide(): void {
        this.active = false
    }

    public show(): void {
        ModalController._hideAll()

        this.active = true
    }

    public get active(): boolean {
        return getRef(this._active)
    }

    public set active(val: boolean) {
        setRef(this._active, val)
    }
}
