import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"
import type { ScopeSyntax } from "brandi/lib/typings/container/syntax/ScopeSyntax"
import type { UnknownCreator } from "brandi/lib/typings/types"

import { Container, injected } from "brandi"

export abstract class DIAbstract<Tokens = any> {
    private static _container: Container = new Container()

    private static _tokens: Map<string, Token<any>> = new Map()

    protected __getInjection<T>(token: Token<T>): T {
        return DIAbstract._container.get(token)
    }

    protected __getToken<T>(key: string): Token<T> {
        return DIAbstract._tokens.get(key)!
    }

    private bind<T>(
        token: Token<T>,
        instance: UnknownCreator<any>,
        scope: "container" | "transient" = "container",
    ): void {
        let scopeSyntax: ScopeSyntax = DIAbstract._container.bind(token).toInstance(instance)

        if (scope === "container")
            scopeSyntax.inContainerScope()
        else
            scopeSyntax.inTransientScope()
    }

    public inject(): void {
        this.__bindings.forEach((binding: Binding): void => this.bind(...binding))
        this.__injections.forEach((injection: Injection): void => injected(...injection))
    }

    public updateTokens(): void {
        useForObj(this.__tokens, (token: Token<any>, key: keyof Tokens): void => {
            DIAbstract._tokens.set(key.toString(), token)
        })
    }

    protected abstract __bindings: Binding[]

    protected abstract __injections: Injection[]

    protected abstract __tokens: Tokens
}
