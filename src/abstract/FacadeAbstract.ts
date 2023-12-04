export abstract class FacadeAbstract {
    public abstract bootstrap(): Promise<void>

    public abstract dispose(): Promise<void>
}
