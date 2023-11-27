import type { BodyLoginWithOauth2ApiV1LoginOauthPostRaw, TokenRaw } from "#schema/data-contracts"
import type { HttpResponse } from "#schema/http-client"
import type { ApiAdapter } from "~/adapters"

export class AuthService {
    public constructor(
        private _apiAdapter: ApiAdapter,
    ) {}

    public async login(payload: BodyLoginWithOauth2ApiV1LoginOauthPostRaw): Promise<TokenRaw> {
        let { data }: HttpResponse<TokenRaw> = (
            await this._apiAdapter.loginWithOauth2ApiV1LoginOauthPost(payload)
        )

        return data
    }

    public async refreshToken(): Promise<TokenRaw> {
        let { data }: HttpResponse<TokenRaw> = (
            await this._apiAdapter.refreshTokenApiV1LoginRefreshPost()
        )

        return data
    }
}
