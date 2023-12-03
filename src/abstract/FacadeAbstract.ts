// todo: connect facades with routes in ~/app/router.options.ts
export abstract class FacadeAbstract {
    public abstract bootstrap(): Promise<void>
}
