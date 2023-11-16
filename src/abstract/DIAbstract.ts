import type { Binding, Injection } from "~/types"
import type { Container, Token } from "brandi"
import type { ScopeSyntax } from "brandi/lib/typings/container/syntax/ScopeSyntax"
import type { UnknownCreator } from "brandi/lib/typings/types"

import { injected } from "brandi"

export abstract class DIAbstract<Tokens = any> {
    public constructor(
        private _container: Container,
        private _tokens: Map<string, Token<any>>,
    ) {}

    protected __getInjection<T>(token: Token<T>): T {
        return this._container.get(token)
    }

    protected __getToken<T>(key: string): Token<T> {
        return this._tokens.get(key)!
    }

    private _bind<T>(
        token: Token<T>,
        instance: UnknownCreator<any>,
        scope: (
            "container" |
            "transient"
        ) = "container",
    ): void {
        let scopeSyntax: ScopeSyntax = this._container.bind(token).toInstance(instance)

        if (scope === "container")
            scopeSyntax.inContainerScope()
        else
            scopeSyntax.inTransientScope()
    }

    public inject(): void {
        this.__bindings.forEach((binding: Binding): void => this._bind(...binding))
        this.__injections.forEach((injection: Injection): void => injected(...injection))
    }

    public updateTokens(): void {
        useForEach(this.__tokens, (token: Token<any>, key: keyof Tokens): void => {
            this._tokens.set(key.toString(), token)
        })
    }

    protected abstract __bindings: Binding[]

    protected abstract __injections: Injection[]

    protected abstract __tokens: Tokens
}
